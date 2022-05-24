import { readdir, readFile, writeFileSync, readdirSync } from "fs";
import { mergeDeep } from "./utils/mergeDeep";
import { Feature } from "./a11ysupport.feature";

function writeFile(fileName: string, data: Object) {
	return writeFileSync(
		fileName,
		`---
${JSON.stringify(data, null, 2)}
---`
	);
}

function convertFeature(feature: Feature) {
	const tests = feature.tests?.map((test) => {
		const r = {};
		for (const atName in test.versions) {
			r[atName] = r[atName] || {};

			for (const browserName in test.versions[atName].browsers) {
				r[atName][browserName] ||= {};
				const browser = test.versions[atName].browsers[browserName];
				const browserVersion = browser.browser_version;
				r[atName][browserName][browserVersion] = [];

				test.assertions.forEach((assertion) => {
					if (assertion.feature_title === feature.title) {
						const at = assertion.results[atName];
						const browser = at.browsers[browserName];
						r[atName] ||= {};
						r[atName][browserName] ||= {};
						r[atName][browserName][browserVersion] ||= [];

						r[atName][browserName][browserVersion].push({
							support: browser?.support,
							note: browser?.notes
								? test.title + ": " + browser?.notes
								: browser?.support === "n"
								? "Didn't " + assertion.assertion_title
								: undefined,
						});
					}
				});
			}
		}

		return r;
	});
	const mapped = tests.reduce((curr, next) => mergeDeep(curr, next), {});
	let stats = {};
	let notes_by_num = [];
	for (const atName in mapped) {
		for (const browserName in mapped[atName]) {
			const keys = Object.keys(mapped[atName][browserName]);
			const values: any[] = Object.values(
				mapped[atName][browserName]
			).flat();
			const browserSupport = values.map((i) => i.support);
			const notes = values.map((i) => i.note);
			const ordered = keys.sort((a, b) => parseFloat(a) - parseFloat(b));
			const key =
				keys.length === 1
					? keys[0]
					: `${ordered[0]}-${ordered[ordered.length - 1]}`;
			stats[atName] ||= || {};
			stats[atName][browserName] ||= {};
			// stats[atName][browserName][key] = browserSupport.flat();
			let result = "u";
			if (browserSupport.every((v) => v === "y" || v === "na")) {
				result = "y";
			} else if (browserSupport.some((v) => v === "y")) {
				result = "a";
			} else if (browserSupport.every((v) => v === "n")) {
				result = "n";
			} else if (browserSupport.every((v) => v === "na")) {
				result = "na";
			}

			if (notes) {
				notes.filter(Boolean).forEach((note) => {
					let index = Object.values(notes_by_num).findIndex(
						(s) => s === note
					);
					if (index === -1) {
						notes_by_num.push(note);
						index = notes_by_num.length - 1;
					}

					if (result.indexOf(" #" + (index + 1)) === -1) {
						result += " #" + (index + 1);
					}
				});
			}

			stats[atName][browserName][key] = result;
		}
	}

	notes_by_num = notes_by_num.filter(Boolean);
	if (notes_by_num.length === 0) {
		notes_by_num = undefined;
	} else {
		notes_by_num = notes_by_num.reduce((acc, curr, i) => {
			acc[(i + 1).toString()] = curr;
			return acc;
		}, {});
	}

	return {
		title: feature.title,
		description: feature.description,
		category: (feature as any).techId,
		keywords: feature.keywords.toString(),
		last_test_date: feature.date_updated,
		test_results_url: `https://a11ysupport.io/tech/${feature.id}`,
		test_url: `https://a11ysupport.io/tech/${feature.id}`,
		notes: feature.recommendation,
		notes_by_num,
		stats,
		links: []
			.concat(feature.related_issues, feature.references)
			.filter(Boolean)
			.reduce((acc, curr) => {
				acc[curr.title] = curr.url;
				return acc;
			}, {}),
	};
}

const folder = "../computed-aria/external-tests/a11ysupport.io/build/tech/";
const paths = readdirSync(folder).map((f) => folder + f + "/");

paths.forEach((path) => {
	//passsing directoryPath and callback function
	readdir(path, function (err, files) {
		if (err) {
			throw err;
		}

		files.forEach(function (fileName) {
			generateFile(path, fileName);
		});
	});
});

// generateFile(__dirname + "/../../a11ysupport.io/build/tech/aria/", "aria-required_attribute.json");

function generateFile(path: string, fileName: string) {
	return readFile(path + fileName, { encoding: "utf8" }, (err, raw) => {
		if (err) {
			throw err;
		}

		const feature = convertFeature(JSON.parse(raw));
		const hasResults = !Object.values(Object.values(feature.stats))
			.map((i) => Object.values(i))
			.flat()
			.map((i) => Object.keys(i))
			.flat()
			.every((i) => i === "all");

		if (hasResults) {
			writeFile(
				`../_features/${feature.category}-${fileName.split(".")[0]}.md`,
				feature
			);
		}
	});
}

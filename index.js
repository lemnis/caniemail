function converFeature(feature) {
	const stats = {};
	feature.tests?.map((test) => {
		for (const at in test.versions) {
			stats[at] = stats[at] || {};

			for (const browserName in test.versions[at].browsers) {
				stats[at][browserName] = stats[at][browserName] || {};
				const browser = test.versions[at].browsers[browserName];
				stats[at][browserName][browser.browser_version] = null;
			}
		}
	});

	for (const at in feature.core_support_by_at_browser) {
		stats[at] = stats[at] || {};
		for (const browserName in feature.core_support_by_at_browser[at]) {
			stats[at][browserName] = stats[at][browserName] || {};
			const browser = feature.core_support_by_at_browser[at][browserName];
			let result = "u";
			if (browser.values.every((v) => v === "y")) {
				result = "y";
			} else if (browser.values.some((v) => v === "y")) {
				result = "a";
			} else if (browser.values.every((v) => v === "na" || v === "n")) {
				result = "n";
			}
			const keys = Object.keys(stats[at][browserName]);
			if (keys.length > 0) {
				keys.forEach((k) => {
					stats[at][browserName][k] = result;
				});
			} else {
				stats[at][browserName]["all"] = "u";
			}
		}
	}

	return {
		title: feature.title,
		description: feature.description,
		category: feature.techId,
		keywords: feature.keywords,
		last_test_date: feature.date_updated,
		test_results_url: `https://a11ysupport.io/tech/${feature.id}`,
		notes: feature.recommendation,
		stats,
		links: [].concat(feature.related_issues, feature.references).filter(Boolean).reduce(
			(acc, curr) => {
				acc[curr.title] = curr.url;
				return acc;
			},
			{}
		),
	};
}

const fs = require("fs");
const paths = [
	__dirname + "/node_modules/a11ysupport/build/tech/html/",
	__dirname + "/node_modules/a11ysupport/build/tech/css/",
	__dirname + "/node_modules/a11ysupport/build/tech/aria/",
	__dirname + "/node_modules/a11ysupport/build/tech/svg/",
];

paths.forEach((path) => {
	//passsing directoryPath and callback function
	fs.readdir(path, function (err, files) {
		if (err) {
			throw new Error(err);
		}

		files.forEach(function (fileName) {
			fs.readFile(path + fileName, (err, raw) => {
				if (err) {
					throw new Error(err);
				}

				const feature = converFeature(JSON.parse(raw));
				const hasResults = !Object.values(Object.values(feature.stats))
					.map((i) => Object.values(i))
					.flat()
					.map((i) => Object.keys(i))
					.flat()
					.every((i) => i === "all");

				if (hasResults) {
					fs.writeFileSync(`${__dirname}/_features/${feature.category}-${fileName.split(".")[0]}.md`,
						`---
${JSON.stringify(feature, null, 2)}
---`
					);
				}
			});
		});
	});
});

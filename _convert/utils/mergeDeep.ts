function isObject(item: any): item is Object {
	return (
		item &&
		typeof item === "object" &&
		!Array.isArray(item) &&
		item !== null
	);
}

export function mergeDeep(target: any, source: any) {
	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else if (Array.isArray(source[key])) {
				// if (!target[key]) Object.assign(target, { [key]: source[key] });
				target[key] = [...(target[key] || []), ...source[key]];
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}
	return target;
}

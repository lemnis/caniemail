---
layout: null
permalink: "/assets/js/cania11y.js"
---
{% include_relative _search.js %}
{% include_relative _settings.js %}
{% include_relative _filters.js %}
{% include_relative _options.js %}
{% include_relative _support.js %}

class Cania11y {

	constructor() {
		this.search = new Search();
		this.settings = new Settings();
		this.filters = new Filters();
		this.support = new Support();
		this.accessibleColors = new Options('.a11y-colors-button', 'accessible-colors-enabled');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.cania11y = new Cania11y();
	window.cania11y.filters.onDOMContentLoaded();
});
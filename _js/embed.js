---
layout: null
permalink: "/assets/js/embed.js"
---
{% include_relative _options.js %}
{% include_relative _parameter.js %}

class Cania11y {

	constructor() {
		this.accessibleColors = new Options('.a11y-colors-button', 'accessible-colors-enabled');
		this.switchLayout = new Options('.switch-layout-button', 'alternate-layout-enabled');
		this.lightView = new Parameter('screenshot-view-enabled');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.cania11y = new Cania11y();
});

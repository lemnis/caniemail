---
layout: null
permalink: "/caniemail/assets/js/embed-home.js"
---
{% include_relative _generator.js %}

class Cania11y {

	constructor() {
		this.generator = new Generator();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.cania11y = new Cania11y();
});

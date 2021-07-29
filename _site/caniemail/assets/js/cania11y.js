class Search {

	constructor() {

		this.data = null;
		this.term = null;
		this.results = null;
		this.input = document.querySelector('.search-input');
		this.form = document.querySelector('.search');
		this.origin = document.location.href;
		this.timer = null;
		this.timerDelay = 300;

		if(this.input != null) {

			this.input.addEventListener('focus', e => {
				this.loadJSONFile();
			});

			this.input.addEventListener('input', e => {

				this.term = e.currentTarget.value.trim();
				this.form.classList.add('search--loading');

				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					if(!this.data) {
						this.loadJSONFile();
					}

					this.query();

					if(this.term) {
						this.updateURL();
					}
				}, this.timerDelay);

			});

			const url = new URL(document.location.href);
			if(url.searchParams.get('s') != null) {

				if(!this.data) {
					this.loadJSONFile();
				}
				this.input.value = url.searchParams.get('s');
				this.term = url.searchParams.get('s');
				this.query();
			}


		}
	}

	loadJSONFile() {

		if(!this.data) {
			fetch('/assets/js/features.json')
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.data = json;
				if(this.term) {
					this.query();
				}
			})
			.catch(error => {
				console.error(error);
			});
		}
	}

	query() {

		//if(!this.data) {
		//	this.form.classList.add('search--loading');
		//}

		if(!this.term) {
			this.form.classList.remove('search--loading');
			this.removeResultsMessage();
			this.removeResultsContainer();
			this.results = [];
			history.replaceState({id:'search'}, 'search', `${this.origin}`);
		}

		if(this.data && this.term) {

			const previousResultsLength = this.results ? this.results.length : -1;
			this.results = [];
			if(this.term.includes('+')) {

				let terms = this.term.split('+');
				terms.forEach(item => {
					if(item != '') {
						let itemResults = this.data.filter(feature => this.results.filter(result => result.title == feature.title).length == 0 && (feature.slug.toLowerCase() === item.toLowerCase().trim() || feature.title.toLowerCase().includes(item.toLowerCase().trim()) || feature.keywords.toLowerCase().includes(item.toLowerCase().trim())));
						this.results = [...this.results, ...itemResults];
					}
				});
			}
			else if(this.term.includes(' vs ')) {

				let terms = this.term.split('vs');
				terms.forEach(item => {
					if(item != '') {
						let itemResults = this.data.filter(feature => this.results.filter(result => result.title == feature.title).length == 0 && (feature.slug.toLowerCase() === item.toLowerCase().trim() || feature.title.toLowerCase().includes(item.toLowerCase().trim()) || feature.keywords.toLowerCase().includes(item.toLowerCase().trim())));
						this.results = [...this.results, ...itemResults];
					}
				});
			}
			else {
				this.results = this.data.filter(feature => feature.slug.toLowerCase() === this.term.toLowerCase() || feature.title.toLowerCase().includes(this.term.toLowerCase()) || feature.keywords.toLowerCase().includes(this.term.toLowerCase()));
			}

			this.form.classList.remove('search--loading');

			if(this.results.length != 0 && this.results.length != previousResultsLength) {
				this.buildResultsMessage(this.results.length);
			}

			if(this.results.length == 0) {
				this.removeResultsContainer();
				this.buildResultsMessage(this.results.length);
			}
			else {
				this.buildResultsContainer();
				this.buildResults();
			}

			this.updateTitle();
		}
	}

	removeResultsMessage() {

		let searchResultsMessage = document.querySelector('[role=search] form .search-empty');
		if(searchResultsMessage != null) {
			searchResultsMessage.remove();
		}
	}

	buildResultsMessage(n) {

		let searchResultsMessage = document.querySelector('[role=search] form .search-empty');
		if(searchResultsMessage == null) {
			let noResult = document.createElement('p');
			noResult.classList.add('search-empty');
			searchResultsMessage = document.querySelector('[role=search] form').appendChild(noResult);
		}
		let message = '';
		if(n == 0) {
			message = 'No results found.';
			message += ' Why not <a href="https://github.com/lemnis/cania11y/issues?utf8=✓&q=is%3Aissue+is%3Aopen+'+encodeURIComponent(this.term)+'">suggest this feature to be added?</a>';
		} else if (n == 1) {
			message = '1 result found.';
		} else {
			if(this.term.includes('+')) {
				const icon = `<span class="icon icon--notebook" aria-hidden="hidden"></span>`;
				message = icon + `<b>Secret Recipe</b> with `;
				let index = 0;
				this.results.forEach(feature => {
					if(index > 0 && index < n - 1) {
						message += `, `;
					} else if(index == n - 1) {
						message += ` and `;
					}
					const featureURL = `/features/${feature.slug}/`;
					message += `<a href="${featureURL}">${feature.title}</a>`;
					index++;
				});
				message += `.`;
			} else if(this.term.includes(' vs ')) {
				const icon = `<span class="icon icon--shout" aria-hidden="hidden"></span>`;
				message = icon + `<b>Versus</b> with `;
				let index = 0;
				this.results.forEach(feature => {
					if(index > 0 && index < n - 1) {
						message += `, `;
					} else if(index == n - 1) {
						message += ` and `;
					}
					const featureURL = `/features/${feature.slug}/`;
					message += `<a href="${featureURL}">${feature.title}</a>`;
					index++;
				});
				message += `.`;
			} else {
				message = n + ' results found.';
			}
		}
		searchResultsMessage.innerHTML = message;
	}

	buildResultsContainer() {

		if(document.querySelector('[role=main] .search-results') == null) {
			let container = document.createElement('div');
			container.classList.add('search-results');
			container.id = 'search-results';
			document.querySelector('[role=main]').prepend(container);
		}
	}

	removeResultsContainer() {

		if(document.querySelector('[role=main] .search-results') != null) {
			document.querySelector('[role=main] .search-results').remove();
		}
	}

	buildResults() {

		const container = document.querySelector('[role=main] .search-results');
		container.querySelectorAll('section').forEach(section => {
			if(this.results.filter(feature => feature.slug == section.getAttribute('data-slug')).length == 0) {
				section.remove();
			}
		});

		this.results.forEach(feature => {
			if(container.querySelector(`[data-slug="${feature.slug}"]`) == null) {
				const featureURL = `/features/${feature.slug}/`;
				let div = document.createElement('div');
				div.innerHTML = `<section class="feature feature--placeholder" data-slug="${feature.slug}">
						<header class="feature-header">
							<div class="feature-header-column">
								<h1 class="feature-title"><a href="${featureURL}">${feature.title}<span class="feature-permalink" aria-hidden="true">#</span></a></h1>
							</div>
							<div class="feature-header-column">
							</div>
						</header>
						<div class="data-details"></div>
						<footer class="feature-footer"></footer>
					</section>`;
				container.appendChild(div.firstChild);

				const featureContainer = container.querySelector(`[data-slug="${feature.slug}"]`);
				featureContainer.classList.add('loading');

				fetch(featureURL)
				.then(response => {
					return response.text();
				})
				.then(text => {
					let div = document.createElement('div');
					div.innerHTML = text;
					if(featureContainer != null) {
						featureContainer.classList.remove('feature--placeholder');
						featureContainer.classList.remove('loading');
						featureContainer.querySelector('.data-details').innerHTML = div.querySelector('.data-details').innerHTML;
						if(window.cania11y && window.cania11y.settings && window.cania11y.settings.unchecked) {
							featureContainer.querySelector('.data-details').appendChild(window.cania11y.settings.getEmptyDataMessageElement());
						}
						featureContainer.querySelector('.feature-footer').innerHTML = div.querySelector('.feature-footer').innerHTML;
						featureContainer.querySelector('.feature-header-column:nth-child(1)').innerHTML += div.querySelector('.feature-description').outerHTML;
						featureContainer.querySelector('.feature-header-column:nth-child(2)').innerHTML = div.querySelector('.feature-header-column:nth-child(2)').innerHTML;
					}
				})
				.catch(error => {
					console.error(error);
				});
			}
		});
	}

	updateURL() {
		history.replaceState({id:'search'}, 'search', `${document.location.origin}/search/?s=${encodeURIComponent(this.term)}`);
	}

	updateTitle() {

		document.querySelector('title').innerHTML = `Can I A11y&hellip; "${this.term}" search results`;
	}
}

class Settings {

	constructor() {

		this.unchecked = false;
		this.button = document.querySelector('.settings-button');
		this.panel = document.querySelector('.settings');

		if(this.panel && this.button) {
			this.init();
		}
	}

	init() {

		this.initEmptyMessages();
		this.setInitialValues();
		this.setStyles();
		this.addEventToToggleButton();
		this.addEventToCheckboxes();
		this.addEventToCheckAllButton();
	}

	setInitialValues() {

		const settingsString = this.getLocalStorage();
		if(settingsString && settingsString !== '') {
			const settings = settingsString.split('&');
			if(settings.length > 0) {
				settings.forEach(setting => {
					const keyValuePair = setting.split('=');
					const key = keyValuePair[0];
					const value = keyValuePair[1];
					if(value.toLowerCase() == 'on') {
						const checkbox = this.panel.querySelector(`input[type="checkbox"][name="${key}"]`);
						checkbox.checked = true;
					} else {
						const checkbox = this.panel.querySelector(`input[type="checkbox"][name="${key}"][value="${value}"]`);
						checkbox.checked = true;
					}
				});
			}
			// Indeterminate status
			const uncheckedParentCheckboxes = this.panel.querySelectorAll('.settings-list-item > input[type="checkbox"]:not(:checked)');
			if(uncheckedParentCheckboxes.length > 0) {
				uncheckedParentCheckboxes.forEach(checkbox => {
					const checkedChildrenCheckboxes = checkbox.parentNode.querySelectorAll('.settings-child-list-item input[type="checkbox"]:checked');
					if(checkedChildrenCheckboxes.length > 0) {
						checkbox.indeterminate = true;
					}
				});
			}
		} else {
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				checkbox.checked = true;
			});
			this.save();
		}
		this.setUncheckedVariable();
	}

	addEventToCheckAllButton() {

		let button = this.panel.querySelector('#settings-check-all-button');
		button.addEventListener('click', e => {

			e.preventDefault();
			// Change label
			const dataAttributeLabel = 'data-label-toggle';
			const oldLabel = button.innerText;
			const newLabel = button.getAttribute(dataAttributeLabel);
			button.innerText = newLabel;
			button.setAttribute(dataAttributeLabel, oldLabel);
			// Check/Uncheck all
			const dataAttributeChecked = 'data-checked';
			const checkValue = (button.getAttribute(dataAttributeChecked) == 'true');
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				checkbox.checked = checkValue;
				checkbox.indeterminate = false;
			});
			button.setAttribute(dataAttributeChecked, !checkValue);
			// Save settings
			this.save();
		});
	}

	addEventToToggleButton() {

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	addEventToCheckboxes() {

		const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener('click', e => {
				if(checkbox.parentNode.className == 'settings-list-item') {
					const childCheckboxes = checkbox.parentNode.querySelectorAll('.settings-child-list-item input[type="checkbox"]');
					if(childCheckboxes.length > 0) {
						const checkboxStatus = checkbox.checked;
						childCheckboxes.forEach(childCheckbox => {
							childCheckbox.checked = checkboxStatus;
						});
					}
				} else if(checkbox.parentNode.className == 'settings-child-list-item') {
					const parentCheckbox = checkbox.parentNode.parentNode.parentNode.querySelector('input[type="checkbox"]');
					const siblingCheckboxes = parentCheckbox.parentNode.querySelectorAll('.settings-child-list-item input[type="checkbox"]');
					if(parentCheckbox.checked == true) {
						if(siblingCheckboxes.length == 1) {
							parentCheckbox.indeterminate = false;
						} else {
							parentCheckbox.indeterminate = true;
						}
						parentCheckbox.checked = false;
					} else {
						let checkboxesStatusIsTheSame = true;
						siblingCheckboxes.forEach(siblingCheckbox => {
							if(siblingCheckbox.checked != checkbox.checked) {
								checkboxesStatusIsTheSame = false;
							}
						});
						if(checkboxesStatusIsTheSame) {
							parentCheckbox.checked = checkbox.checked;
							parentCheckbox.indeterminate = false;
						} else {
							parentCheckbox.checked = false;
							parentCheckbox.indeterminate = true;
						}
					}
				}
				this.save();
			});
		});
	}

	toggle() {

		this.panel.toggleAttribute('hidden');
		document.body.classList.toggle('settings-opened');
	}

	getFormDataToString() {

		const form = document.getElementById('settings-form');
		const formData = new FormData(form);
		let formDataString = '';
		for (var key of formData.entries()) {
			if(formDataString !== '') {
				formDataString += '&';
			}
			formDataString += key[0] + '=' + key[1];
		}
		return formDataString;
	}

	setLocalStorage() {

		const data = this.getFormDataToString();
		localStorage.setItem('settings', data);
	}

	getLocalStorage() {

		return localStorage.getItem('settings');
	}

	unapply() {

		const hiddenElements = document.querySelectorAll('.data-family[hidden], .data-client[hidden]');
		if(hiddenElements && hiddenElements.length > 0) {
			hiddenElements.forEach(item => {
				item.removeAttribute('hidden');
			});
		}
		this.panel.querySelector('#settings-style').innerHTML = '';
	}

	apply() {

		this.setStyles();
	}

	setStyles() {
		let css = '';
		let cssSelectors = new Array();
		const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]:not(:checked)')
		if(checkboxes && checkboxes.length > 0) {
			checkboxes.forEach(checkbox => {
				const key = checkbox.name;
				const value = checkbox.value;
				if(value.toLowerCase() === 'on') {
					if(!checkbox.indeterminate) {
						cssSelectors.push(`.data-family--${key}`);
					}
				} else {
					cssSelectors.push(`.data-family--${key} .data-client--${value}`);
				}
			});
			cssSelectors = cssSelectors.join(',');
			css += cssSelectors;
			css += '{display:none}';
		}
		this.unapply();
		if(cssSelectors.length > 0) {
			document.querySelectorAll(cssSelectors).forEach(item => {
				item.setAttribute('hidden', '');
			});
		}
		this.panel.querySelector('#settings-style').innerHTML = css;
	}

	save() {

		this.setLocalStorage();
		this.setStyles();
		this.setUncheckedVariable();
		this.toggleEmptyMessage();

		if(window.cania11y && window.cania11y.filters) {
			window.cania11y.filters.setCurrentValue('apply');
			window.cania11y.filters.showOrHide();
		}

		if(window.cania11y && window.cania11y.support) {
			window.cania11y.support.update();
		}
	}

	isFullyChecked() {
		const allCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		const allCheckedCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]:checked');
		return (allCheckboxes.length == allCheckedCheckboxes.length);
	}

	isFullyUnchecked() {
		const allCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		const allUncheckedCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]:not(:checked)');
		return (allCheckboxes.length == allUncheckedCheckboxes.length);
	}

	setUncheckedVariable() {
		const allCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		const allUncheckedCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]:not(:checked)');
		this.unchecked = (allCheckboxes.length == allUncheckedCheckboxes.length);
	}

	createEmptyDataMessageElement() {
		const message = this.getRandomEmptyMessage();
		const emptyMessageElement = document.createElement('div');
		emptyMessageElement.className = 'empty-message';
		emptyMessageElement.innerHTML = `<p class="i">${message.emoji}</p><p>${message.text}</p>`;
		return emptyMessageElement;
	}

	getEmptyDataMessageElement() {
		return this.createEmptyDataMessageElement();
	}

	toggleEmptyMessage() {
		if(this.unchecked) {
			const dataContainers = document.querySelectorAll('.data-details');
			let emptyDataMessage = this.getEmptyDataMessageElement();
			dataContainers.forEach(dataContainer => {
				const existingEmptyDataMessage = dataContainer.querySelector('.empty-message');
				if(existingEmptyDataMessage === null) {
					dataContainer.appendChild(emptyDataMessage.cloneNode(true));
				} else {
					existingEmptyDataMessage.removeAttribute('hidden');
				}
			});
		} else {
			let existingEmptyDataMessages = document.querySelectorAll('.empty-message');
			existingEmptyDataMessages.forEach(item => {
				item.setAttribute('hidden', '');
			});
		}
	}

	initEmptyMessages() {
		this.emptyMessages = [
			{
				"emoji": "&#128123;",
				"text": "Boo! You woke up the <b>Email Ghost</b>!<br>Check some Software Combinations again or it might haunt you forever!"
			},
			{
				"emoji": "&#x1F996;",
				"text": "Rawr! You brought back the <b>Emailosaurus Rex</b>!<br>Check some Software Combinations again or it might run after you!"
			},
			{
				"emoji": "&#x1F41D;",
				"text": "Bzzz! You attracted the <b>Email Bee</b>!<br>Check some Software Combinations again or it might sting you!"
			},
		];
	}

	getRandomEmptyMessage() {
		let randomIndex = Math.floor(Math.random() * Math.floor(this.emptyMessages.length));
		return this.emptyMessages[randomIndex];
	}


}

class Filters {

	constructor() {

		this.filters = document.querySelectorAll('.filters');
		this.current = 'apply';
		this.init();
	}

	init() {
		this.addEvents();
	}

	onDOMContentLoaded() {
		this.showOrHide();
		this.setInitialValue();
	}

	addEvents() {
		this.filters.forEach(filter => {
			const applyButton = filter.querySelector('.filter-apply-button');
			const unapplyButton = filter.querySelector('.filter-unapply-button');

			if(applyButton) {

				applyButton.addEventListener('click', e => {

					e.preventDefault();
					if(window.cania11y && window.cania11y.settings) {
						filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
						applyButton.classList.add('filter-button--active');
						window.cania11y.settings.apply();
						this.setCurrentValue('apply');
					}

					if(window.cania11y && window.cania11y.support) {
						window.cania11y.support.update();
					}
				});
			}

			if(unapplyButton) {

				unapplyButton.addEventListener('click', e => {

					e.preventDefault();
					if(window.cania11y && window.cania11y.settings) {
						filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
						unapplyButton.classList.add('filter-button--active');
						window.cania11y.settings.unapply();
						this.setCurrentValue('unapply');
					}

					if(window.cania11y && window.cania11y.support) {
						window.cania11y.support.update();
					}
				});
			}
		});
	}

	areApplied() {
		return (this.current == 'apply');
	}

	showOrHide() {

		if(window.cania11y && window.cania11y.settings) {
			if(window.cania11y.settings.isFullyChecked() || window.cania11y.settings.isFullyUnchecked()) {
				this.filters.forEach(filter => {
					filter.setAttribute('hidden', '');
				});
			} else {
				this.filters.forEach(filter => {
					filter.removeAttribute('hidden', '');

					filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
					if(this.areApplied()) {
						const applyButton = filter.querySelector('.filter-apply-button');
						applyButton.classList.add('filter-button--active');
					} else {
						const unapplyButton = filter.querySelector('.filter-unapply-button');
						unapplyButton.classList.add('filter-button--active');
					}
				});
			}
		}
	}

	setInitialValue() {

		const storedValue = this.getLocalStorage();
		if(storedValue) {
			this.current = storedValue;
			if(storedValue == 'apply') {
				this.filters.forEach(filter => {
					const applyButton = filter.querySelector('.filter-apply-button');
					filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
					applyButton.classList.add('filter-button--active');
				});
				if(window.cania11y && window.cania11y.settings) {
					window.cania11y.settings.apply();
				}
			} else if(storedValue == 'unapply') {
				this.filters.forEach(filter => {
					const unapplyButton = filter.querySelector('.filter-unapply-button');
					filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
					unapplyButton.classList.add('filter-button--active');
				});
				if(window.cania11y && window.cania11y.settings) {
					window.cania11y.settings.unapply();
				}
			}

			if(window.cania11y && window.cania11y.support) {
				window.cania11y.support.update();
			}
		}
	}

	setCurrentValue(state) {

		if(this.current != state && (state == 'apply' || state == 'unapply')) {
			this.current = state;
			this.setLocalStorage();
		}
	}

	setLocalStorage() {

		localStorage.setItem('filters', this.current);
	}

	getLocalStorage() {

		return localStorage.getItem('filters');
	}
}
class Options {

	constructor(buttonSelector, optionName) {

		this.button = document.querySelector(buttonSelector);
		this.name = optionName;
		this.enabled = false;
		if(this.button) {
			this.addEvent();
		}
	}

	addEvent() {

		this.init();

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	init() {
		const enableOption = this.getLocalStorage();
		if(enableOption == 'true') {
			this.toggle();
		}
	}

	toggle() {

		this.enabled = !this.enabled;
		this.toggleCSSClass();
		this.toggleLabel();
		this.setLocalStorage();
	}

	toggleCSSClass() {

		const newClassName = this.name;
		document.body.classList.toggle(newClassName);
	}

	toggleLabel() {

		const dataAttributeName = 'data-label-toggle';
		const oldLabel = this.button.innerText;
		const newLabel = this.button.getAttribute(dataAttributeName);
		this.button.innerText = newLabel;
		this.button.setAttribute(dataAttributeName, oldLabel);

	}

	setLocalStorage() {

		localStorage.setItem(this.name, this.enabled);
	}

	getLocalStorage() {

		return localStorage.getItem(this.name);
	}
}
//
// Support
// Class to make live calculations of Estimated Support in feature pages.
//
class Support {

	constructor() {

		this.currentFeature = document.querySelector('.feature');
		this.currentTotal = 0;
		this.currentValues = new Array();
		this.currentValues['y'] = 0, this.currentValues['a'] = 0, this.currentValues['n'] = 0, this.currentValues['u'] = 0;
	}

	update() {
		const features = document.querySelectorAll('.feature');
		features.forEach(feature => {
			this.currentFeature = feature;
			this.updateSupportValues();
			this.updateHTML();
		});
	}

	updateSupportValues() {
		const clients = this.currentFeature.querySelectorAll('.data-family:not([hidden]) .data-client:not([hidden]');
		this.currentTotal = clients.length;
		this.currentValues['y'] = 0, this.currentValues['a'] = 0, this.currentValues['n'] = 0, this.currentValues['u'] = 0;
		clients.forEach(client => {
			const lastVersion = client.querySelector('.data-version:last-child');
			if(lastVersion.classList.contains("supported")) {
				this.currentValues['y']++;
			} else if(lastVersion.classList.contains("mitigated")) {
				this.currentValues['a']++;
			} else if(lastVersion.classList.contains("unsupported")) {
				this.currentValues['n']++;
			} else if(lastVersion.classList.contains("unknown")) {
				this.currentValues['u']++;
			}
		});
	}

	show() {
		this.currentFeature.querySelector('.feature-support').removeAttribute('hidden');
	}

	hide() {
		this.currentFeature.querySelector('.feature-support').setAttribute('hidden', '');
	}

	updateHTML() {
		console.log("updateHTML: ", this.currentTotal);
		if(this.currentTotal > 0) {
			this.show();
			this.updateScoreHTML();
			this.updateSummaryHTML();
		} else {
			this.hide();
		}
	}

	updateScoreHTML() {
		let scoreHTML = "";
		if(this.currentValues['y'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['y'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% supported" style="width:${valueInPercent}%;" class="supported"></div>`;
		}
		if(this.currentValues['a'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['a'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% partially supported" style="width:${valueInPercent}%;" class="mitigated"></div>`;
		}
		if(this.currentValues['n'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['n'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% not supported" style="width:${valueInPercent}%;" class="unsupported"></div>`;
		}
		if(this.currentValues['u'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['u'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% support unknown" style="width:${valueInPercent}%;" class="unknown"></div>`;
		}
		if(this.currentValues['na'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['na'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% not applicable" style="width:${valueInPercent}%;" class="inapplicable"></div>`;
		}
		this.currentFeature.querySelector('.score').innerHTML = scoreHTML;
	}

	updateSummaryHTML() {
		let summaryHTML = "";
		const yValueInPercent = this.convertToPercent(this.currentValues['y'], this.currentTotal);
		const aValueInPercent = this.convertToPercent(this.currentValues['a'], this.currentTotal);
		if(this.currentValues['y'] > 0 && this.currentValues['a'] > 0) {
			const yPlusAValueInPercent = this.roundToTwoDecimals(yValueInPercent + aValueInPercent);
			summaryHTML = `
				<span class="feature-support-summary-value supported" title="${yValueInPercent}% supported">${yValueInPercent}%</span>
				+
				<span class="feature-support-summary-value mitigated" title="${aValueInPercent}% partially supported">${aValueInPercent}%</span>
				= ${yPlusAValueInPercent}%
			`;
		} else if(this.currentValues['y'] > 0) {
			summaryHTML = `
				<span class="feature-support-summary-value supported" title="${yValueInPercent}% supported">${yValueInPercent}%</span> supported
			`;
		} else if(this.currentValues['a'] > 0) {
			summaryHTML = `
				<span class="feature-support-summary-value mitigated" title="${aValueInPercent}% supported">${aValueInPercent}%</span> partially supported
			`;
		} else if(this.currentValues['n'] > 0) {
			const nValueInPercent = this.convertToPercent(this.currentValues['n'], this.currentTotal);
			summaryHTML = `
				<span class="feature-support-summary-value unsupported" title="${nValueInPercent}% supported">${nValueInPercent}%</span> not supported
			`;
		}

		// If we have a subset of Software Combinations selected through the settings,
		// we add a text to notice it.
		if(window.cania11y && window.cania11y.filters && window.cania11y.settings) {
			if(window.cania11y.filters.areApplied() && !window.cania11y.settings.isFullyChecked()) {
				summaryHTML += `<p class="feature-support-legend">(across selected Software Combinations)</p>`;
			}
		}
		this.currentFeature.querySelector('.feature-support-summary').innerHTML = summaryHTML;
	}

	convertToPercent(value, total) {
		let valueInPercent = (value * 100) / total;
		return this.roundToTwoDecimals(valueInPercent);
	}

	roundToTwoDecimals(n) {
    	return +(Math.round(n + "e+2")  + "e-2");
	}

}


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

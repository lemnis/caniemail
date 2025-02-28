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

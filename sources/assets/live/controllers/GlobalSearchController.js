import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['input', 'clearButton', 'results', 'resultItem'];
    static values = {
        url: String,
        minLength: Number,
    }

    connect() {
        this.inputTarget.addEventListener('input', this.debounce(this.handleInput.bind(this), 300));
        this.inputTarget.addEventListener('focus', this.handleFocus.bind(this));
        this.inputTarget.addEventListener('blur', this.handleBlur.bind(this));
        this.clearButtonTarget.addEventListener('click', this.clearSearch.bind(this));

        document.addEventListener('click', this.handleOutsideClick.bind(this));
    }

    disconnect() {
        this.inputTarget.removeEventListener('input', this.handleInput);
        document.removeEventListener('click', this.handleOutsideClick);
    }

    handleInput(event) {
        const query = event.target.value.trim();

        if (query.length < this.minLengthValue) {
            this.hideResults();
            return;
        }

        this.performSearch(query);
    }

    async performSearch(query) {
        this.showLoader();
        try {
            const response = await fetch(`${this.urlValue}?q=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            this.displayResults(data);
        } catch (error) {
            console.error('Search error:', error);
            this.displayError();
        }
    }

    displayResults(results) {
        if (results.length === 0) {
            this.resultsTarget.innerHTML = `
                <div class="empty">
                    <div class="empty__inner">
                        <img src="/assets/img/no-search.svg" alt="no requests">
                        <span class="empty__text">
                            There are no search results for this query.
                        </span>
                    </div>
                </div>
            `;
        } else {
            const groupedResults = results.reduce((acc, result) => {
                if (!acc[result.type]) {
                    acc[result.type] = [];
                }
                acc[result.type].push(result);
                return acc;
            }, {});


            let html = '';
            Object.keys(groupedResults).forEach(type => {
                const items = groupedResults[type];

                html += `
                <div class="search__top">
                    <h2 class="search__title">
                        ${this.getTypeTitle(type)}
                    </h2>
                </div>`;
                items.forEach(item => {
                    html += this.renderItem(item);
                });
            });

            this.resultsTarget.innerHTML = `
                <div class="search__box">
                    ${html}
                </div>
            `;
        }

        this.showResults();
    }

    getTypeTitle(type) {
        switch (type) {
            case 'user':
                return 'Customers';
            case 'request':
                return 'Requests';
            case 'article':
                return 'Articles';
            default:
                return type.charAt(0).toUpperCase() + type.slice(1);
        }
    }

    renderItem(item) {
        switch (item.type) {
            case 'user':
                return `
                <a href="${item.url}" class="item">
                    <div class="item__left">
                        <div class="avatar">
                            <span class="avatar__name">${this.getInitials(item.title)}</span>
                            <i class="icon-profile-customer"></i>
                        </div>
                    </div>
                    <div class="item__inner">
                        <span class="item__heading">${item.title}</span>
                        <span class="item__text">${item.meta.description}</span>
                    </div>
                </a>
            `;
            case 'request':
                return `
                <a href="${item.url}" class="item">
                    <div class="item__left">
                        <div class="item__decoration">
                            <i class="icon-chat"></i>
                        </div>
                    </div>
                    <div class="item__inner">
                        <span class="item__heading">${item.title}</span>
                        <span class="item__text">${item.meta.description}</span>
                    </div>
                    <div class="item__right">
                        <i class="icon-medium-priority"></i>
                    </div>
                </a>
            `;
            default:
                return `
                <a href="${item.url}" class="item">
                    <div class="item__left">
                        <div class="item__decoration">
                            <i class="icon-link"></i>
                        </div>
                    </div>
                    <div class="item__inner">
                        <span class="item__heading">${item.title}</span>
                        <span class="item__text">${item.meta.description}</span>
                    </div>
                </a>
            `;
        }
    }

    getInitials(name) {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    displayError() {
        this.resultsTarget.innerHTML = `
            <div class="search__error">
                <span class="empty__text">An error occurred during search</span>
            </div>
        `;
        this.showResults();
    }

    handleFocus() {
        const overlay = document.querySelector('.overlay');
        const layout = document.querySelector('.layout');

        overlay.classList.add('show');
        layout.classList.add('no__scroll');

        if (this.resultsTarget.innerHTML.length > 0) {
            this.showResults();
        }
    }

    handleBlur() {
        this.hideResults();
    }

    clearSearch() {
        this.inputTarget.value = '';
        this.hideResults();
    }

    showResults() {
        const overlay = document.querySelector('.overlay');
        const layout = document.querySelector('.layout');

        overlay.classList.add('show');
        layout.classList.add('no__scroll');

        this.resultsTarget.classList.add('show');
    }

    hideResults() {
        const overlay = document.querySelector('.overlay');
        const layout = document.querySelector('.layout');

        overlay.classList.remove('show');
        layout.classList.remove('no__scroll');

        this.resultsTarget.classList.remove('show');
    }

    handleOutsideClick(event) {
        if (!this.element.contains(event.target)) {
            this.hideResults();
        }
    }

    showLoader() {
        this.showResults()
        this.resultsTarget.innerHTML =
            `<div class="loader">
                <span class="loader__circle"></span>
            </div>`;
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

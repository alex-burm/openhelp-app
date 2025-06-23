import { Controller } from '@hotwired/stimulus'

function debounce(fn, delay = 300) {
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

export default class extends Controller {

    static targets = ['input', 'results']
    // static values = {
    //     url: String
    // }

    connect() {
        this.debouncedSearch = debounce(this.search.bind(this), 300)
    }

    async search(event) {
        const query = this.inputTarget.value.trim()

        if (query.length < 3) {
            return;
        }

        const requestUrl = new URL(this.resultsTarget.dataset.url, window.location.origin)
        requestUrl.searchParams.set('query', query)

        try {
            const response = await fetch(requestUrl, {
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            })

            const result = await response.json();

            let html = '';
            if (result.length === 0) {
                html = '<span class="dropdown__item-empty">There are no matching agents.</span>';
            } else {
                for (let userId in result) {
                    html += `
                        <div class="dropdown__item">
                            <a class="btn__primary"
                                data-action="click->UserAutocomplete#setUser"
                                data-UserAutocomplete-user-id-param="${userId}"
                                data-user-id="${userId}"
                            >
                                <i class="icon-agent"></i>
                                <span class="btn__text">
                                    ${result[userId]}
                                </span>
                            </a>
                        </div>
                    `;
                }
            }

            this.resultsTarget.innerHTML = `<div class="dropdown__menu-bot">${html}</div>`;
        } catch (e) {
            console.error('Autocomplete fetch failed:', e)
            this.resultsTarget.innerHTML = '<div class="dropdown__item-empty">Error</div>';
        }
    }

    setUser(event) {
        const { userId } = event.params;

        const parentLive = document.querySelector(this.resultsTarget.dataset.parentElementQuery);
        const parentComponent = this.application.getControllerForElementAndIdentifier(parentLive, parentLive.dataset.controller)

        let { parentActionName, parentActionParams } = this.resultsTarget.dataset;

        parentActionParams = Object.assign({}, JSON.parse(parentActionParams) || {}, { userId })
        parentComponent.component.action(parentActionName, parentActionParams);
    }

    onInput(event) {
        this.debouncedSearch(event)
    }
}

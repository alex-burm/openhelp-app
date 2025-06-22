import { Controller } from '@hotwired/stimulus'
import { getComponent } from '@symfony/ux-live-component';

function debounce(fn, delay = 500) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), delay)
    }
}

export default class extends Controller {
    static targets = ['input']

    async initialize() {
        this.component = await getComponent(this.element);
        this.debouncedSave = debounce(this.save.bind(this), 500)
    }

    onInput() {
        this.debouncedSave()
    }

    async save() {
        const ticketTitle = this.inputTarget.value.trim()
        await this.component.action('save', {
            ticketTitle
        })
    }
}

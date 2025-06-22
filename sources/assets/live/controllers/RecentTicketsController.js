import { Controller } from '@hotwired/stimulus'
import { getComponent } from '@symfony/ux-live-component';

export default class extends Controller {

    async connect () {
        this.component = await getComponent(this.element)

        this.component.on('render:finished', () => {
            handleDropdown(this.element)
        })
    }

    open(event) {
        const ignoreTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT']
        if (ignoreTags.includes(event.target.tagName)) {
            return
        }

        if (event.target.closest('.dropdown')) {
            return
        }

        document.location.href = event.currentTarget.dataset.url;
    }
}

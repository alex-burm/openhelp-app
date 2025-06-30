import { Controller } from '@hotwired/stimulus'
import { getComponent } from '@symfony/ux-live-component';

export default class extends Controller {
    async initialize() {
        this.component = await getComponent(this.element);
    }

    async open (event) {
        event.preventDefault()
        const { ticketId, url } = event.currentTarget.dataset

        window.history.pushState({ path: url }, '', url)

        const header = await getComponent(document.querySelector('#public-chat-header'))
        this.component.action('details', { ticketId }).then(() => {
            OpenHelpChat.subscribe(ticketId)

            header.set('ticketId', ticketId)
            header.render();
        })
    }
}

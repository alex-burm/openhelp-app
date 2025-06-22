import { Controller } from '@hotwired/stimulus'
import { getComponent } from '@symfony/ux-live-component';

export default class extends Controller {
    async initialize() {
        this.component = await getComponent(this.element);
    }

    async open (event) {
        event.preventDefault()
        const { ticketId } = event.currentTarget.dataset

        const header = await getComponent(document.querySelector('#public-chat-header'))
        this.component.action('details', { ticketId }).then(() => {
            OpenHelpChat.subscribe(ticketId)

            console.log('update header?');
            header.set('ticketId', ticketId)
            header.render();
        })
    }
}

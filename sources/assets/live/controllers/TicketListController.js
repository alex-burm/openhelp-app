import { Controller } from '@hotwired/stimulus'
import { getComponent } from '@symfony/ux-live-component';

export default class extends Controller {
    async initialize() {
        this.component = await getComponent(this.element);

        // this.component.on('render:finished', (component) => {
        // });
    }

    open (event) {
        event.preventDefault()
        const { ticketId } = event.currentTarget.dataset

        this.component.action('details', { ticketId }).then((data) => {
            OpenHelpChat.subscribe(ticketId)

            console.log(this.component.getData('selected'))
        })
    }
}

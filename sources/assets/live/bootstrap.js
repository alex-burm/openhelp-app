import { Application } from '@hotwired/stimulus'
import LiveController from '@symfony/ux-live-component'
import TicketListController from './controllers/TicketListController.js'
import UserAutocompleteController from './controllers/UserAutocompleteController.js'
import RecentTicketsController from "./controllers/RecentTicketsController";
import TicketHeaderController from "./controllers/TicketHeaderController";

const application = Application.start()
application.register('live', LiveController)
application.register('TicketList', TicketListController)
application.register('TicketHeader', TicketHeaderController)
application.register('RecentTickets', RecentTicketsController)
application.register('UserAutocomplete', UserAutocompleteController)

application.debug = true;
window.Stimulus = application
console.log('Stimulus started')

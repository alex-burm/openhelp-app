import { CHAT_ITEM_TYPES, USER_MESSAGE_DIRECTION, USER_MESSAGE_STATUSES } from "@public/constants";

export const uuid = (id) =>
    id ||
        ([1e7]+-1e3+-4e3+-8e3+-1e11)
            .replace(
                /[018]/g,
                c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );

export const getLocalDateTime = () => {
    return new Intl.DateTimeFormat('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).format(new Date()).replace(',', ' ');
}

export const createOutgoingMessage = text => {
    return {
        text,
        clientId: uuid(),
        type: CHAT_ITEM_TYPES.MESSAGE,
        status: USER_MESSAGE_STATUSES.SENDING,
        direction: USER_MESSAGE_DIRECTION.OUTGOING,
        datetime: getLocalDateTime(),
    }
}

export const createIncomingMessage = ({text, clientId, serverId, datetime}) => {
    return {
        serverId,
        clientId,
        datetime,
        text,
        type: CHAT_ITEM_TYPES.MESSAGE,
        direction: USER_MESSAGE_DIRECTION.INCOMING,
    }
}

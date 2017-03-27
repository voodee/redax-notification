import { SHOW_NOTIFICATION, REMOVE_NOTIFICATION } from './constants'

export function showNotification(payload) {
    return {
        type: SHOW_NOTIFICATION,
        payload
    }
}

export function removeNotification(uid) {
    return {
        type: REMOVE_NOTIFICATION,
        uid
    }
}
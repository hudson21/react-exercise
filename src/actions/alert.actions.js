import { alertConstants } from '../constants';

export function successAlert(message) {
    return {
        type: alertConstants.SUCCESS,
        message
    }
}

export function errorAlert(message) {
    return {
        type: alertConstants.ERROR,
        message
    }
}

export function clearAlert() {
    return {
        type: alertConstants.CLEAR,
        message: null
    }
}

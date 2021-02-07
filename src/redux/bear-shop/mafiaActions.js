import {
    GET_BEAR,
    CHANGE_QUANTITY
} from './mafiaTypes'


export const getBear = (quantity) => {
    return {
        type: GET_BEAR,
        payload: quantity
    }
}

export const changeQuantity = (quantity) => {
    return {
        type: CHANGE_QUANTITY,
        payload: quantity
    }
}


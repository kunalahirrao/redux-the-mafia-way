import {
    GET_BEAR,
    CHANGE_QUANTITY
} from './mafiaTypes'


const initialState = {
    inStock: 100,
    quantity:10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BEAR:
            return {
                ...state,
                inStock: state.inStock - action.payload
            }
        case CHANGE_QUANTITY :
            return {
                ...state,
                quantity:action.payload
            }
        default: return state
    }
}

export default reducer
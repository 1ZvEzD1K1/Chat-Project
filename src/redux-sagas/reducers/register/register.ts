import { REGISTER_ERROR, REGISTER_STARTED, REGISTER_SUCCESS } from "../../actions/types"


const initialState = {
    data: "",
    error: null,
    res: []
}

export default function register(state = initialState, action: any ) {
    switch (action.type) {
        case REGISTER_STARTED:
            return {
                ...state
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                res: [action.payload]
            }
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}
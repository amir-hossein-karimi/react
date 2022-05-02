import { authActionTypes } from "./types";

const initialState = {
    token: '',
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch(action?.type){
        case authActionTypes.SET_AUTH:
            return { ...state, token: action.payload }
        default:
            return state
    }
}

export default authReducer
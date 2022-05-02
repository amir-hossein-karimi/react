import { authActionTypes } from "./types";

export const setAuth = payload => ({
    type: authActionTypes.SET_AUTH,
    payload
})
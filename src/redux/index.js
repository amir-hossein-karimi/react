import { combineReducers } from "redux";
import { fork, all } from 'redux-saga/effects'
import authReducer from "./auth/reducers";
import authSaga from './auth/sagas'

export const createRootReducer = () => combineReducers({
    auth: authReducer
})

export function* rootSaga() {
    yield all([
        fork(authSaga)
    ])
}
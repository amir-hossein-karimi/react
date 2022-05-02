import { put, takeLatest, all, fork } from 'redux-saga/effects'
import { authActionTypes } from './types'

function* handleLogin() {
    yield console.log('handle => login')
}

function* authWatch() {
    yield takeLatest(authActionTypes.SET_AUTH, handleLogin)
}

function* authSaga() {
    yield all([
        fork(authWatch)
    ])
}

export default authSaga
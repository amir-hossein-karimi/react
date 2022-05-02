import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createRootReducer, rootSaga } from './redux'

export default function configureStore(history, initialState) {
    const composeEnhancers = composeWithDevTools({})
    const sagaMiddleware = createSagaMiddleware()

    const localStorageMiddleware = ({ getState }) => {
        return (next) => (action) => {
            const result = next(action);
            localStorage.setItem('applicationState', JSON.stringify(
                getState()
            ));
            return result;
        };
    };

    const reHydrateStore = () => {
        if (localStorage.getItem('applicationState') !== null) {
            const data = localStorage.getItem('applicationState');
            return JSON.parse(data)
        } else
            return initialState
    }

    const store = createStore(
        createRootReducer(history),
        reHydrateStore(),
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, localStorageMiddleware,))
    )

    sagaMiddleware.run(rootSaga)
    return store
}

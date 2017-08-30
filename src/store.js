import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import name from './components/name/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        name: name, 
    }),
    {},
    composeEnhancers(applyMiddleware(createLogger()))
);

export default store;
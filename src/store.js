import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import name from './components/name/reducer';
import users from './components/users/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        name: name,
        users: users 
    }),
    {},
    composeEnhancers(applyMiddleware(createLogger(), thunk))
);

export default store;
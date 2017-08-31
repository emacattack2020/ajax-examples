import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { name, users, posts } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        name: name,
        users: users,
        posts: posts
    }),
    {},
    composeEnhancers(applyMiddleware(createLogger(), thunk))
);

export default store;
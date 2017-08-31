import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import name from './reducers/name';
import users from './reducers/users';
import posts from './reducers/posts';

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
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";
// createStore takes a reducer as the first argument
// You may also pass an initial state to createStore, useful for server side rendering and state preloading, 
// but for now we’re not interested in that.
// The most important concept to understand here is that the state in Redux comes from reducers.

// Redux itself is a small library (2KB) and the most important methods are just three:
// getState for reading the current state of the application
// dispatch for dispatching an action
// subscribe for listening to state changes

// The subscribe method accepts a callback that will fire whenever an action is dispatched. 
// Dispatching an action means notifying the store that we intend to change the state.

// Calling fetch from an action creator does not work. 
// createSagaMiddleware and initialiseSagaMiddleware.run for running our saga.

const initialiseSagaMiddleware = createSagaMiddleware();

// this enables redux DEV TOOLS
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
        )
);
initialiseSagaMiddleware.run(apiSaga);

export default store;

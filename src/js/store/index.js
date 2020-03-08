import { createStore } from "redux";
import rootReducer from '../reducers/index';

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

const store = createStore(rootReducer);

export default store;

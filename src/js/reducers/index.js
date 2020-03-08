import { ADD_ARTICLE } from "../constants/action-types";

// A Redux reducer is just a JavaScript function. It takes two parameters: the current state and action
// When an action is dispatched, the store forwards a message (the action object) to the reducer.
// Then depending on the action type, the reducer produces the next state, eventually merging the action payload into the new state.

// First we can return a new JavaScript object with Object.assign. This way we keep the original state unaltered. 
// Then we can use Array.prototype.concat instead of Array.prototype.push for keeping the original array
// The resulting state is just a copy of the initial state. Remember two key points for avoiding mutations in Redux:
// - use concat, slice, or the spread operator for arrays
// - use Object.assign or object spread of objects

const intialState = {
    articles: []
};

function rootReducer(state = intialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        }) 
    }   
    return state;
};

export default rootReducer;
// Redux actions are nothing more than JavaScript objects
// As a best practice in Redux we wrap every action within a function, 
// so that object creation is abstracted away. Such function takes the name of action creator

import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

// fetch call gets returned from an outer function and the outer 
// function has dispatch as a parameter (basically it's a JavaScript closure)
export function getData() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
           dispatch({ type: "DATA_LOADED", payload: json });
        });
    }
  }
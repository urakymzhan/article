// Redux actions are nothing more than JavaScript objects
// As a best practice in Redux we wrap every action within a function, 
// so that object creation is abstracted away. Such function takes the name of action creator

import { ADD_ARTICLE, DATA_REQUESTED } from '../constants/action-types';

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

// A redux saga could live in a single file containing:
// a worker function
// a watcher function
export function getData() {
    return { type: DATA_REQUESTED };
  }
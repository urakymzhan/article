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
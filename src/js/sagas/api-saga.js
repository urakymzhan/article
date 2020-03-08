import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED, API_ERRORED, DATA_REQUESTED } from '../constants/action-types';
// watcher is a generator function watching for every action we are interested in. 
// In response to that action, the watcher will call a worker saga, which is another generator function for doing the actual API call.

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e});
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response => 
    response.json()
    );
}
// HOW IT WORKS:
// take every action named DATA_REQUESTED and for each action spin a worker saga
// inside the worker saga call a function named getData
// if the function succeeds, then dispatch (put) a new action named DATA_LOADED alongside with a payload
// if the function errors out, then dispatch (put) a new action named API_ERRORED, alongside with a payload (the error)
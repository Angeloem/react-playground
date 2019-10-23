import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESSFUL
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = dispatch => {
    dispatch({
        type: REQUEST_ROBOTS_PENDING,
    });

    //fetch it from an online API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({
            type: REQUEST_ROBOTS_SUCCESSFUL,
            payload: data}))
        .then(error => dispatch({
            type: REQUEST_ROBOTS_FAILED,
            payload: error
        }))
};

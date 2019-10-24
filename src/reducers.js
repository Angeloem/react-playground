import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESSFUL
} from "./constants";

const initialStateForSearching = {
    searchField: ''
};

export const searchRobots = (state = initialStateForSearching, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

const initialSTateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialSTateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign(
                {}, state,  {
                    isPending: true
                }
            );
        case REQUEST_ROBOTS_SUCCESSFUL:
            return Object.assign(
                {}, state, {
                    isPending: false,
                    robots: action.payload
                }
            )
        case REQUEST_ROBOTS_FAILED:
            return Object.assign(
                {}, state,
                {
                    error: action.payload,
                    isPending:false
                }
            )
    }
}

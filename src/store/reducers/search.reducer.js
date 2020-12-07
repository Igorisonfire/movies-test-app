import {searchActions} from "../actions/search.actions";

const initState = {
    query: '',
    results: []
};

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case searchActions.SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case searchActions.SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state
    }
}
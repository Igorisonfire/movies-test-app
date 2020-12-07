
export const searchActions = {
    SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
    SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
}

export const setSearchQueryAction = (payload) => {
    return {
        type: searchActions.SET_SEARCH_QUERY,
        payload
    }
};

export const setSearchResultsAction = (payload) => {
    return {
        type: searchActions.SET_SEARCH_RESULTS,
        payload
    }
};

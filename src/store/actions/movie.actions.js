export const movieActions = {
    SET_ALL_MOVIES: 'SET_ALL_MOVIES'
}

export const setMoviesAction = (payload) => {
    return {
        type: movieActions.SET_ALL_MOVIES,
        payload
    }
};

import {movieReducer} from "./reducers/movie.reducer";
import {searchReducer} from "./reducers/search.reducer";

export const rootReducer = (state = {}, action) => {
    return {
        movie: movieReducer(state.movie, action),
        search: searchReducer(state.search, action)
    };
};

import {movieActions} from "../actions/movie.actions";

const initState = {
    allMovies: [],
    moviesByGenre: [],
    getMovieObj: {}
};

export const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case movieActions.SET_ALL_MOVIES: {

            let genresList = [];
            let getMovieObj = {};

            action.payload.forEach((movie) => {

                //create obj to get current movie
                getMovieObj[movie.id] = movie

                //create genresList
                movie.genres.forEach((genre) => {
                    if(genresList.indexOf(genre) === -1) {
                        genresList = [
                            ...genresList,
                            genre
                        ]
                    }
                })
            })

            const moviesByGenre = genresList.map((genre) => {
                let matchMovies = []

                //sort movies by genre
                action.payload.forEach((movie) => {
                    if(movie.genres.indexOf(genre) !== -1){
                        matchMovies = [
                            ...matchMovies,
                            movie
                        ]
                    }
                })

                return {
                    genre: genre,
                    movies: matchMovies
                }
            })

            return {
                ...state,
                allMovies: action.payload,
                moviesByGenre: moviesByGenre,
                getMovieObj: getMovieObj
            }
        }
        default:
            return state
    }
}
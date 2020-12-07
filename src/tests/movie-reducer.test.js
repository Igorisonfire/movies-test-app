import {movieReducer} from "../store/reducers/movie.reducer";
import {movieActions} from "../store/actions/movie.actions";

const initState = {
    allMovies: [],
    moviesByGenre: [],
    getMovieObj: {}
};

const setMoviesAction = {
    type: movieActions.SET_ALL_MOVIES,
    payload: [
        {
            genres: ["Action"],
            id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
            title: "The Dark Knight"
        }
    ]
}

describe('movieReducer', () => {
    it('SET_ALL_MOVIES', () => {
        const result = movieReducer(initState, setMoviesAction)
        const expectResult = {
            allMovies: [
                {
                    genres: ["Action"],
                    id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
                    title: "The Dark Knight",
                },
            ],
            getMovieObj: {
                "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8": {
                    genres: ["Action"],
                    id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
                    title: "The Dark Knight",
                },
            },
            moviesByGenre: [
                {
                    genre: "Action",
                    movies: [
                        {
                            genres: ["Action"],
                            id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
                            title: "The Dark Knight",
                        },
                    ],
                },
            ],
        }

        expect(result).toStrictEqual(expectResult)
    })

    it('empty', () => {
        const result = movieReducer(initState, {})

        expect(result).toStrictEqual(initState)
    })
});





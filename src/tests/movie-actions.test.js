import {movieActions, setMoviesAction} from "../store/actions/movie.actions";

const mockMovies = [
    {
        genres: ["Action"],
        id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
        title: "The Dark Knight"
    }
]

describe('Movie Actions', () => {
    it('setMoviesAction', () => {
        const result = setMoviesAction(mockMovies)
        const expectResult = {
            type: movieActions.SET_ALL_MOVIES,
            payload: [
                {
                    genres: ["Action"],
                    id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
                    title: "The Dark Knight"
                }
            ]
        }

        expect(result).toStrictEqual(expectResult)
    })
});





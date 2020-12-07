import {searchReducer} from "../store/reducers/search.reducer";
import {searchActions} from "../store/actions/search.actions";
import {movieReducer} from "../store/reducers/movie.reducer";

const initState = {
    query: '',
    results: []
};

const setQueryAction = {
    type: searchActions.SET_SEARCH_QUERY,
    payload: 'test query'
}

const setSearchResultsAction = {
    type: searchActions.SET_SEARCH_RESULTS,
    payload: ['1', '2', '3']
}

describe('searchReducer', () => {
    it('SET_SEARCH_QUERY', () => {
        const result = searchReducer(initState, setQueryAction)
        const expectResult = {
            query: 'test query',
            results: []
        }

        expect(result).toStrictEqual(expectResult)
    })

    it('SET_SEARCH_RESULTS', () => {
        const result = searchReducer(initState, setSearchResultsAction)
        const expectResult = {
            query: '',
            results: ['1', '2', '3']
        }

        expect(result).toStrictEqual(expectResult)
    })

    it('empty', () => {
        const result = searchReducer(initState, {})

        expect(result).toStrictEqual(initState)
    })
});





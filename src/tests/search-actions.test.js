import {searchActions, setSearchQueryAction, setSearchResultsAction} from "../store/actions/search.actions";

describe('Search Actions', () => {
    it('setSearchQueryAction', () => {
        const result = setSearchQueryAction('test query')
        const expectResult = {
            type: searchActions.SET_SEARCH_QUERY,
            payload: 'test query'
        }

        expect(result).toStrictEqual(expectResult)
    })

    it('setSearchResultsAction', () => {
        const result = setSearchResultsAction(['1', '2', '3'])
        const expectResult = {
            type: searchActions.SET_SEARCH_RESULTS,
            payload: ['1', '2', '3']
        }

        expect(result).toStrictEqual(expectResult)
    })
});





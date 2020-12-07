import * as React from 'react'
import './index.scss'
import {connect} from "react-redux";
import {MoviePreviewItem} from "../../components/MoviePreviewItem";
import {getMovies} from "../../services/movie.service";
import {setSearchQueryAction, setSearchResultsAction} from "../../store/actions/search.actions";

class SearchScene extends React.Component {

    getData = async () => {
        try {
            const searchQuery = this.props.search.query
            if(searchQuery) {
                const response = await getMovies(searchQuery)
                this.setSearchResultsToStore(response.data.movies)
            }
        } catch (error) {
            console.error(error);
        }
    }

    setSearchResultsToStore = (movies) => {
        this.props.dispatch(setSearchResultsAction(movies))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.search.query !== this.props.search.query) {
            this.getData()
        }
    }

    componentDidMount() {
        this.getData()
    }

    componentWillUnmount() {
        this.props.dispatch(setSearchQueryAction(''))
        this.props.dispatch(setSearchResultsAction([]))
    }


    render() {
        const searchResults = this.props.search.results

        return(
            <div className={'search-scene'}>
                {searchResults.length ?
                    <div className={'container search-results-container'}>
                        {searchResults.map((item, index) => (
                            <MoviePreviewItem key={index} movie={item}/>
                        ))}
                    </div> :
                    <p className={'no-results'}>No Results</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
    };
};

export default connect(mapStateToProps)(SearchScene);
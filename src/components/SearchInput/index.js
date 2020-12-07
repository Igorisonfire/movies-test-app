import * as React from 'react'
import './index.scss'
import {connect} from "react-redux";
import {setSearchQueryAction} from "../../store/actions/search.actions";
import {withRouter} from "react-router-dom";


class SearchInput extends React.Component {

    onChange = (event) => {
        const value = event.target.value
        this.props.dispatch(setSearchQueryAction(value))
        this.searchListener(value)
    }

    searchListener = (value) => {
        const pathname = this.props.history.location.pathname

        if(value.trim().length && pathname !== '/search'){
            this.props.history.push('/search')
        }

        if(!value.trim().length && pathname === '/search'){
            this.props.history.goBack()
        }
    }

    render() {
        const searchQuery = this.props.search.query
        return(
            <div className={'search-input'}>
                <img src='https://img.icons8.com/search' alt='search'/>
                <input type='text' onChange={this.onChange} value={searchQuery}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
    };
};

export default withRouter(connect(mapStateToProps)(SearchInput));
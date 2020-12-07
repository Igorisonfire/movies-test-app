import * as React from 'react'
import './index.scss'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {StarsBar} from "../../components/StarsBar";

class MovieScene extends React.Component {

    state = {
        currentMovie: {}
    }

    getMovie = () => {
        const movieStore = this.props.movie
        const getMovieObj = movieStore && movieStore.getMovieObj
        const currentId = this.props.match.params.id

        this.setState({
            currentMovie: getMovieObj[currentId]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.getMovie()
        }
    }

    componentDidMount() {
        this.getMovie()
    }

    render() {
        const movie = this.state.currentMovie
        const movieRating = movie.imdb_rating && movie.imdb_rating.toFixed(1)
        const movieRatingPercent = movieRating * 10
        const movieDate = movie.released_on && new Date(movie.released_on);

        return(
            <div className={'movie-scene'}>
                <div className={'container movie-container'}>
                    <div className={'poster-block'}>
                        <img src={movie.poster} alt={movie.title}/>
                    </div>
                    <div className={'info-block'}>
                        <div className={'head'}>
                            <h2>{movie.title}&nbsp;<span>({movieRating})</span></h2>
                            <StarsBar percent={movieRatingPercent}/>
                        </div>
                        <div className={'sub-info'}>
                            <div className={'year'}>
                                <span>{movieDate && movieDate.getFullYear()}</span>
                                <span>{movie.length}</span>
                                <span>{movie.director}</span>
                            </div>
                            <div className={'cast'}>
                                <span>Cast:&nbsp;</span>
                                {movie.cast && movie.cast.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}
                            </div>
                        </div>
                        <p className={'overview'}>{movie.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
    };
};

export default withRouter(connect(mapStateToProps)(MovieScene));
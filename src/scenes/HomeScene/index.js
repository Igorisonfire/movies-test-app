import * as React from 'react'
import './index.scss'
import {connect} from "react-redux";
import GenreRow from "../../components/GenreRow";

class HomeScene extends React.Component {

    render() {
        const moviesByGenre = this.props.movie.moviesByGenre

        return(
            <div className={'home-scene'}>
                <div className={'container rows-container'}>
                    {moviesByGenre && moviesByGenre.map((item, index) => (
                        <GenreRow key={index} genre={item.genre} movies={item.movies}/>
                    ))}
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

export default connect(mapStateToProps)(HomeScene);
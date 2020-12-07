import * as React from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {setMoviesAction} from "./store/actions/movie.actions";
import {getMovies} from "./services/movie.service";
import {Route, Switch} from "react-router-dom";
import HomeScene from "./scenes/HomeScene";
import MovieScene from "./scenes/MovieScene";
import SearchScene from "./scenes/SearchScene";
import {Header} from "./components/Header";

class App extends React.Component {

    state = {
        initIsDone: false
    }

    getData = async () => {
        try {
            const response = await getMovies()
            this.setMoviesToStore(response.data.movies)
            this.setState({
                initIsDone: true
            })
        } catch (error) {
            console.error(error);
        }
    }

    setMoviesToStore = (movies) => {
        this.props.dispatch(setMoviesAction(movies))
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.state.initIsDone &&
                    <Switch>
                        <Route exact path="/" component={HomeScene}/>
                        <Route exact path="/movie/:id" component={MovieScene}/>
                        <Route exact path="/search" component={SearchScene}/>
                    </Switch>
                }
            </div>
        );
    }
}

export default connect()(App);
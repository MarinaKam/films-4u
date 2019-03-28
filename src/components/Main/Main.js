import React, { Component, Fragment } from 'react';
import { API_KEY, PATH_BASE, PATH_POPULAR, PATH_MOVIE } from '../../apis';
import List from "../List/List";

class Main extends Component {
     state = {
        popularMovies: []
     };

     componentDidMount() {
        this.getPopularMovies();
     }

     getPopularMovies = () => {
        fetch(`${PATH_BASE}${PATH_MOVIE}${PATH_POPULAR}?language=en-US&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(popularMovies => this.setPopularMovies(popularMovies));
     };

     setPopularMovies = popularMovies => {
         this.setState({ popularMovies });
     };

     render() {
        const { results } = this.state.popularMovies;
        if(!results) return <div>Loading...</div>;
        console.log(results);
        return(
            <Fragment>
                { results && <List list={results}/> }
            </Fragment>
        )
     }

}

export default Main;

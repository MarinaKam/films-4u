import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.module.css';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from '../SideBar/SideBar.module.css';
import Main from "../Main/Main";
import { API_KEY, PATH_BASE, PATH_POPULAR, PATH_MOVIE, PATH_TOP_RATED, PATH_UPCOMING, PATH_SEARCH } from '../../apis';
import SearchResult from "../SearchResult/SearchResult";

class App extends Component {
    state = {
        isActive: false,
        movies: [],
        searchResults: [],
        query: ''
    };
    componentDidMount() {
       this.getMovies();
    }
    getMovies = async () => {
        const response = await axios.get(`${PATH_BASE}${PATH_MOVIE}${PATH_POPULAR}?language=en-US&api_key=${API_KEY}`);
        this.setState({ movies: response.data.results });
    };

    searchMovies = async val => {
        const TERM = val.replace(/\s/g, '+');
        const response = await axios.get(`${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&language=en-US&query=${TERM}`);
        this.setState({searchResults: response.data.results, query: val });
        console.log('from app.js', response.data);
    };

    handleClick = () => this.setState({ isActive: !this.state.isActive });
    handleBlur = () => this.setState({ isActive: false });

    render() {
        const { movies, searchResults, query } = this.state;
        return (
            <BrowserRouter>
              <Fragment>
                <Header onSubmit={this.searchMovies} onClick={this.handleClick} onBlur={this.handleBlur}/>
                <section className={styles.sidebar}>
                  <SideBar isActive={this.state.isActive}/>
                </section>
                  <main>
                      <Switch>
                          <Route path='/popular' render={() => <Main movies={movies} title='Popular' section={PATH_POPULAR} />}/>
                          <Route path='/top-rated' render={()=><Main  movies={movies} title="Top Rated" section={PATH_TOP_RATED} />}/>
                          <Route path='/coming-soon' render={()=><Main movies={movies} title="Coming Soon" section={PATH_UPCOMING} />}/>
                          <Route path="/search" render={()=><SearchResult searchResults={searchResults} query={query} title="Search movie" section={PATH_SEARCH} />}/>
                      </Switch>
                  </main>
              </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

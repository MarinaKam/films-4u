import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.module.css';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from '../SideBar/SideBar.module.css';
import Main from "../Main/Main";
import { API_KEY, PATH_BASE, PATH_POPULAR, PATH_MOVIE, PATH_TOP_RATED, PATH_UPCOMING, PATH_SEARCH, PATH_PAGE } from '../../apis';
import SearchResult from "../SearchResult/SearchResult";
import MovieItem from "../MovieItem/MovieItem";
// import Filters from "../Filters/Filters";
import Discover from "../Discover/Discover";

// import history from '../history';

class App extends Component {

    defaulFilterstState = {
        filters: {
            rating: {
                min: 5,
                max: 10
            },
            runtime: {
                min: 45,
                max: 250
            },
            sort_by: {
                value: 'vote_average',
                label: 'Rating'
            },
            order: {
                value: 'desc',
                label: 'Descending'
            },
            year: new Date().getFullYear()
        }
    };

    state = {
        isActive: false,
        searchResults: {},
        // filtersOpen: true,
        ...this.defaulFilterstState,

    };

    searchMovies = async (val, page) => {
        const TERM = val.replace(/\s/g, '+');
        const response = await axios.get(`${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&language=en-US&query=${TERM}&${PATH_PAGE}${page}&include_adult=false`);
        this.setState({searchResults: response.data});
    };

    resetFilters = () => this.setState(this.defaulFilterstState);

    updateStateWithFilters = (filters) => this.setState({ filters });

    handleClick = () => this.setState({ isActive: !this.state.isActive });
    handleBlur = () => this.setState({ isActive: false });

    render() {
        const { searchResults } = this.state;
        return (
            <BrowserRouter>
              <Fragment>
                  <Header onSubmit={this.searchMovies} onClick={this.handleClick} onBlur={this.handleBlur}/>
                  <section className={styles.sidebar}>
                    <SideBar isActive={this.state.isActive}
                             filters={this.state.filters}
                             updateFilters={this.updateStateWithFilters}
                             resetFilters={this.resetFilters}
                    />
                  </section>
                  <main>
                      <Switch>
                          <Route exact path="/" render={()=><Discover
                              title="Discover"
                              updateFilters={this.updateStateWithFilters}
                              filters={this.state.filters}
                          />}/>
                          <Route path='/popular' render={() => <Main title='Popular' section={PATH_POPULAR} />}/>
                          <Route path='/top-rated' render={() => <Main title="Top Rated" section={PATH_TOP_RATED} />}/>
                          <Route path='/coming-soon' render={() => <Main title="Coming Soon" section={PATH_UPCOMING} />}/>
                          <Route path="/search" render={() => <SearchResult
                              searchMovies={this.searchMovies}
                              searchResults={searchResults}
                              title="Search movie"
                              section={PATH_SEARCH}/> } />
                          <Route path='/movie/:id' render={props => (
                              <MovieItem {...props} id={props.match.params.id}/>
                          ) }/>
                      </Switch>
                  </main>
                  {/*<footer>*/}
                  {/*    <p>*/}
                  {/*        Marie Kam*/}
                  {/*    </p>*/}
                  {/*</footer>*/}
              </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

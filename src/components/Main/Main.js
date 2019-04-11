import React, { Component, Fragment } from 'react';
import List from "../List/List";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";
import { API_KEY, DEFAULT_PAGE, PATH_BASE, PATH_MOVIE, PATH_PAGE } from "../../apis";
import axios from 'axios';

class Main extends Component {
    state = {
        movies: {},
        loading: true
    };

    componentDidMount() {
        this.getMovies(this.props.section, DEFAULT_PAGE);
    }

    componentWillReceiveProps(nextProps) {
        this.getMovies(nextProps.section, DEFAULT_PAGE);
    }

    getMovies = async (section, page) => {
        const response = await axios.get(`${PATH_BASE}${PATH_MOVIE}${section}?language=en-US&api_key=${API_KEY}&${PATH_PAGE}${page}&include_adult=false`);
        this.setMovies(response.data);
    };

    setMovies = (movies) => {
        const { results, page } = movies;

        const oldResults = page !== 1
            ? this.state.movies.results
            : [];

        const updatedResults = [
            ...oldResults,
            ...results
        ];

        this.setState({
            movies: { results: updatedResults, page },
            loading: false
        })
    };


    render() {
        const { section, title} = this.props;
        const { movies } = this.state;
        const { results, page } = movies;
        if(!results) return <div>Loading...</div>;
        return(
            <Fragment>
                <h1>{title}</h1>
                { movies && <List list={results}/> }
                <div className={styles.btn}>
                    <Button
                        className='btn__next'
                        onClick={() => this.getMovies(section, page + 1)}
                        text="Load more"
                    />
                </div>
            </Fragment>
        )
    }
}

export default Main;

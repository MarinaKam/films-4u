import React, { Component, Fragment } from 'react';
import axios from "axios";
import Dropdown from 'react-dropdown';
import { API_KEY, PATH_BASE, PATH_DISCOVER, PATH_MOVIE, DEFAULT_PAGE, PATH_PAGE } from '../../apis';
import List from "../List/List";
import styles from "./Discover.module.css";
import Button from "../Button/Button";
import stylesBtn from '../Button/Button.module.css';

class Discover extends Component {

    state = {
        movies: {},
    };

    componentDidMount() {
        this.getMovies(DEFAULT_PAGE);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.filters !== this.props.filters){
            this.getMovies(DEFAULT_PAGE)
        }
    };

    getMovies = async page => {
        const response = await axios.get(`${PATH_BASE}${PATH_DISCOVER}${PATH_MOVIE}?language=en-US&api_key=${API_KEY}&${PATH_PAGE}${page}&primary_release_year=${this.props.filters.year}&vote_average.gte=${this.props.filters.rating.min}&vote_average.lte=${this.props.filters.rating.max}&with_runtime.gte=${this.props.filters.runtime.min}&with_runtime.lte=${this.props.filters.runtime.max}&sort_by=${this.props.filters.sort_by.value}.${this.props.filters.order.value}`
        );
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
            movies: { results: updatedResults, page }
        })
    };

    // toggleFilters = () => {
    //     this.props.toggleFilters();
    // };

    render() {

        const { movies } = this.state;
        const { title, filters } = this.props;
        const { results, page } = movies;
        const sort_by = [
            { value: 'popularity', label: 'Popularity' },
            { value: 'vote_average', label: 'Rating' },
            { value: 'original_title', label: 'Original Title' }];
        const sort_by_order = [
            { value: 'asc', label: 'Ascending' },
            { value: 'desc', label: 'Descending' }
        ];

        return (
            <Fragment>
                <h1 className={styles['discover-header']}>{title}</h1>
                <h2 className={styles['discover-tagline']}>— browse movies by year, ratings and duration.</h2>
                <div className={styles['sort-order']}>
                    <div className={styles['sort-order__item']}>
                        <span className={styles['sort-order__label']}>Sort by</span>
                        <Dropdown
                            className={styles['test']}
                            options={sort_by}
                            value={`${filters.sort_by.label}`}
                            onChange={sort_by => this.props.updateFilters({ ...filters, sort_by })} />
                    </div>
                    <div className={styles['sort-order__item']}>
                        <span className={styles['sort-order__label']}>Order by</span>
                        <Dropdown
                            className="test"
                            options={sort_by_order}
                            value={`${filters.order.label}`}
                            onChange={order => this.props.updateFilters({ ...filters, order })} />
                    </div>
                </div>

                { results && <List list={results}/> }
                <div className={stylesBtn.btn}>
                    <Button
                        className='btn__next'
                        onClick={() => this.getMovies(page + 1)}
                        text="Load more"
                    />
                </div>
            </Fragment>
        );
    }
}

export default Discover;

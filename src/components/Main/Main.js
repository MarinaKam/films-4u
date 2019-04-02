import React, { Fragment } from 'react';
import List from "../List/List";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";

const Main = ({movies, getMovies, section, title}) => {
    const { results, page, total_pages, total_results } = movies;
    if(!results) return <div>Loading...</div>;
    return(
        <Fragment>
            <h1>{title}</h1>
            { movies && <List list={results}/> }
            <div className={styles.btn}>
                <Button
                    className='btn__next'
                    onClick={() => getMovies(section, page + 1)}
                    text="Load more"
                />
                <Button
                    className={page === 1 ? 'btn__hidden' : 'btn__prev'}
                    onClick={() => getMovies(section, page - 1)}
                    text="Back"
                />
            </div>

        </Fragment>
    )
};

export default Main;

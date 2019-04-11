import React, { Component } from 'react';

import List from "../List/List";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";

class SearchResult extends  Component {

    render() {
        const {searchResults, title, searchMovies, section} = this.props;
        const { results, page, total_results } = searchResults;
        return (
            <div>
                <h1>{title}</h1>
                { total_results > 0 ?
                    <div>
                        <p>There are <b>{ total_results }</b> <b style={{float: 'right', color: 'red', marginRight: '10px'}}>{ page }</b></p>
                        <List list={ results }/>
                        <div className={ styles.btn }>
                            <Button
                                className='btn__next'
                                onClick={ () => searchMovies(section, page + 1) }
                                text="Load more"
                            />
                        </div>
                    </div>
                    :
                    <div style={ { textAlign: 'center', fontSize: '26px' } }>
                        <p style={ { fontSize: '56px', color: 'red' } }>¯\_(ツ)_/¯</p>
                        <p>There are no movies, try again.</p>
                    </div>
                }
            </div>
        );
    }
}

export default SearchResult;
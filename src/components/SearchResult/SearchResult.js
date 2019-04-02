import React  from 'react';

import List from "../List/List";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";

const SearchResult = (props) => {
    const {searchResults, query, title, searchMovies, section} = props;
    const { results, page, total_pages, total_results } = searchResults;
    return (
        <div>
            <h1>{title}</h1>
               {total_results > 0 ?
                <div>
                     <p>There are <b>{total_results}</b>  results for: "{ query }".</p>
                     <List list={ results }/>
                    <div className={styles.btn}>
                        <Button
                            className='btn__next'
                            onClick={() => searchMovies(section, page + 1)}
                            text="Load more"
                        />
                        <Button
                            className={page === 1 ? 'btn__hidden' : 'btn__prev'}
                            onClick={() => searchMovies(section, page - 1)}
                            text="Back"
                        />
                    </div>
                 </div>
                 :
                 <div style={{textAlign: 'center', fontSize: '26px'}}>
                     <p style={{fontSize: '56px', color: 'red'}}>¯\_(ツ)_/¯</p>
                     <p>There are no movies, try again.</p>
                 </div>
             }
        </div>
    );
};

export default SearchResult;
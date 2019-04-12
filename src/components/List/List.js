import React from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.css';

const List = ({ list }) => {
    const item = list.map(({title, id, vote_average, poster_path}) => (
        <div key={id} className={styles['list-item']}>
            <span className={styles['list-item__average']}>{vote_average}</span>
            <div className={styles['list-item__img']}>
                { poster_path === null ?
                    <Link
                        className={`${styles['list-item__link']} ${styles['list-item__empt-link']}`}
                        to={`/movie/${id}`}>
                        <div className={styles['list-item__holder']}>
                            <p>"No image available"</p>
                        </div>
                    </Link>
                    :
                    <Link
                        className={styles['list-item__link']}
                        to={`/movie/${id}`}>
                        <img
                            alt={title}
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                        />
                    </Link>
                }
                <div className={styles['list-img__overlay']}>
                    <div className={styles['list-img__overlay-txt']}>
                        <button><i className="fas fa-heart"></i></button>
                        <Link to={`/movie/${id}`}><i className="fas fa-play"></i></Link>
                    </div>
                </div>
            </div>
            <div className={styles['list-item__title']}>{title}</div>
        </div>
    ));
    return(
            <div className={styles['list']}>
                { item }
            </div>
        );
};

export default List;

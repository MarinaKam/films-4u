import React  from 'react';
import styles from './List.module.css';

const List = ({list}) => {
    console.log(list);
    const item = list.map(({title, id, vote_average, poster_path}) => (
        <div key={id} className={styles['list-item']}>
            <span className={styles['list-item__average']}>{vote_average}</span>
            <div className={styles['list-item__img']}>
                <a href="/">
                    <img
                        alt={title}
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                    />
                </a>
                <div className={styles['list-img__overlay']}>
                    <div className={styles['list-img__overlay-txt']}>
                        <a href="/"><i className="fas fa-heart"></i></a>
                        <a href="/"><i className="fas fa-play"></i></a>
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

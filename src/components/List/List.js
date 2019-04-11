import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.css';
// import MovieItem from "../MovieItem/MovieItem";

class List extends Component {
    state = {
        height: 299
    };

    componentDidMount() {
        this.calcHeight();
        window.addEventListener('resize', this.calcHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calcHeight);
    }

    calcHeight = () => this.setState({height: this.refHolder.clientHeight});

    render() {
        const { list } = this.props;
        const { height } = this.state;
        const item = list.map(({title, id, vote_average, poster_path}) => (
            <div key={id} className={styles['list-item']}>
                <span className={styles['list-item__average']}>{vote_average}</span>
                <div
                    ref={holder => this.refHolder = holder}
                    className={styles['list-item__img']}>
                    { poster_path === null ?
                        <Link to={`/movie/${id}`} style={{height: height}}>
                            <div className={styles['list-item__holder']}></div>
                        </Link>
                        :
                        <Link to={`/movie/${id}`}>
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
    }

}

export default List;

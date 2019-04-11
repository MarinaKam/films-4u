import React, { Component } from 'react';
import axios from 'axios';

import { API_KEY, PATH_BASE, PATH_MOVIE } from "../../apis";
import styles from './MovieItem.module.css';

class MovieItem extends Component {

    state = {
        movie: {},
        index: 0,
        isShow: false
    };

    componentDidMount() {
        this.getMovie();
    }

    getMovie = async () => {
        const MOVIE_ID = this.props.match.params.id;
        const response = await axios.get(`${PATH_BASE}${PATH_MOVIE}/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos,images`);
        this.setState({ movie: response.data });
    };

    incrementVideo = (e) => {
        e.preventDefault();
        const {index, movie: {videos}} = this.state;
        this.setState(({index}) => ({index: index + 1}));
        if(index === videos.results.length - 1) this.setState({index: 0});
    };

    decrementVideo = (e) => {
        e.preventDefault();
        const {index, movie: {videos}} = this.state;
        this.setState(({index}) => ({index: index - 1}));
        if(index === 0 ) this.setState({index: videos.results.length - 1});
    };

    isShowClick = (e) => {
        e.preventDefault();
        this.setState({isShow: !this.state.isShow});
    };

    render() {
        const { movie, index, isShow } = this.state;
        const {backdrop_path, poster_path, overview, videos, title} = movie;
        const results = videos && videos.results;
        // console.log('results', results);
        const movieBgc = {
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
            backgroundRepeat: "no-repeat"
        };

        if(!movie) return <div>Loading...</div>;

        return(
            <div className={styles['movie-item']}>
                {backdrop_path && <div className={styles['movie-bgc']} style={movieBgc}></div>}
                <div className={styles['movie-cnt']}>
                    {poster_path &&
                        <div className={styles['movie-poster']}>
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                        </div>
                    }
                    <div className={styles['movie-data']}>
                        <h1 className={styles['movie-data__title']}>{title}</h1>
                        <h3 className={styles['movie-data__overview']}>Overview</h3>
                        <p className={styles['movie-data__txt']}>{overview}</p>
                        {videos && <h3 className={styles['movie-data__overview']}>Total number of trailers {results.length}</h3>}
                        {videos && results.length > 0 && <button onClick={this.isShowClick}>Watch It</button>}
                    </div>
                </div>
                {/*<div className={isShow ? styles['movie'] : [styles['movie'], styles['hidden']].join(' ')}>*/}
                {videos && results.length > 0 &&
                    <div className={!isShow ? styles['movie'] : `${styles['movie']} ${styles['hidden']}`}>
                        <div className={styles['movie-iframe']}>
                            <iframe
                                title={title}
                                width="620" height="300"
                                src={`https://www.youtube.com/embed/${results[index].key}?playlist=${results[index].key}&showinfo=0&modestbranding=1`}
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                            >
                            </iframe>
                        </div>
                        <div className={styles['movie-btn']}>
                            <button onClick={this.decrementVideo}>Prev</button>
                            <span>{index + 1}</span>
                            <button onClick={this.incrementVideo}>Next</button>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default MovieItem;
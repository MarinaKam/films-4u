import React, { Component }  from 'react';
import styles from './List.module.css';

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

    calcHeight = () => {
        // const rect = this.refHolder.clientHeight;
        this.setState({height: this.refHolder.clientHeight});
    };

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
                        <a href="/" style={{height}}>
                            <div className={styles['list-item__holder']}></div>
                        </a>
                            :
                        <a href="/">
                            <img
                                alt={title}
                                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                            />
                        </a>
                        }
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
    }
}

export default List;

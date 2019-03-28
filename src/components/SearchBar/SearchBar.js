import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
        results: []
    };

    handleChange = e =>  this.setState({
        searchTerm: e.target.value
    });

    handleSubmit = e => {
        e.preventDefault();
        this.setState({searchTerm: ''});
        this.props.onSubmit(this.state.searchTerm);
        this.props.history.push('/search');
    };

    render() {
        const { searchTerm } = this.state;
        return(
            <Fragment>
                <form
                  onSubmit={this.handleSubmit}
                  className={styles.search}
                >
                    <button
                        onSubmit={this.handleSubmit}
                        type='submit'
                      className={styles['search-btn']}><i className="fas fa-search fa-sm"></i>
                    </button>
                    <input
                      className={styles['search-field']}
                      type="search"
                      placeholder='Search video...'
                      onChange={this.handleChange}
                      value={ searchTerm }
                    />
                </form>
            </Fragment>
        );
    }
}

export default withRouter(SearchBar);
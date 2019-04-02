import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    handleChange = e =>  this.setState({
        searchTerm: e.target.value
    });

    handleSubmit = async e => {
        e.preventDefault();
        const {searchTerm} = this.state;
        // const query = new URLSearchParams(this.props.location.search).get('query');
        await this.props.onSubmit(searchTerm);
        await this.props.history.push({
            pathname: `/search`,
            search: `?query=${searchTerm}`
        });
        this.setState({searchTerm: ''});
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
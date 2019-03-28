import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {

    state = {
        searchTerm: ''
    };

    handleChange = e =>  this.setState({
        searchTerm: e.target.value
    });

    handleSubmit = e => {
        e.preventDefault();
        this.setState({searchTerm: ''});
        console.log(this.state.searchTerm);
    };

    render() {
        const { searchTerm } = this.state;
        return(
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
        );
    }
}

export default SearchBar;
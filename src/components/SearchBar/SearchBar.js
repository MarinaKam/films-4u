import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {

    state = {
        value: ''
    };

    handleChange = e =>  this.setState({
        value: e.target.value
    });

    handleSubmit = e => {
        e.preventDefault();
        this.setState({value: ''});
        console.log(this.state.value);
    };

    render() {
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
                  onChange={this.handleChange}
                  value={this.state.value}
                  className={styles['search-field']}
                  type="search"
                  placeholder='Search video...'/>
            </form>
        );
    }
}

export default SearchBar;
import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import SearchBar from "../SearchBar/SearchBar";

class Header extends Component {

    menuHandleClick = e => {
        e.preventDefault();
        this.menuBtn.focus();
        this.props.onClick();
    };

    render() {
        const { onBlur } = this.props;
        return (
            <header className={styles.header}>
                <div className={styles['header-overlay']}></div>
                <Link to="/" className={styles['header-logo']}>Films4U</Link>
                <div className={styles['header-search']}>
                    <button
                        ref={ button => this.menuBtn = button }
                        className={styles['header-menu']}
                        onClick={this.menuHandleClick}
                        onBlur={onBlur}
                    >
                        <i className="fas fa-bars fa-2x"></i>
                    </button>
                    <SearchBar onSubmit={this.props.onSubmit}/>
                </div>
                <div className={styles['header-auth']}>
                    <button className={styles['header-auth__btn']}>Log In</button>
                </div>
            </header>
        );
    }
}


export default Header;
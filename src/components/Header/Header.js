import React from 'react';
import styles from './Header.module.css';
import SearchBar from "../SearchBar/SearchBar";
// import headerImg from '../../img/header.jpg';

const Header = () => (
    <header className={styles.header}>
        <div className={styles['header-overlay']}></div>
        <a href="/" className={styles['header-logo']}>Films4U</a>
        <SearchBar/>
        <div className={styles['header-auth']}>
            <button className={styles['header-auth__btn']}>Log In</button>
        </div>
    </header>
);

export default Header;
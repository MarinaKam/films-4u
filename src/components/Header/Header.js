import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import SearchBar from "../SearchBar/SearchBar";
// import headerImg from '../../img/header.jpg';

const Header = ({onClick, onBlur}) => (
    <header className={styles.header}>
        <div className={styles['header-overlay']}></div>
        <Link to="/" className={styles['header-logo']}>Films4U</Link>
        <div className={styles['header-search']}>
            <button
                className={styles['header-menu']}
                onClick={onClick}
                onBlur={onBlur}
            >
                <i className="fas fa-bars fa-2x"></i>
            </button>
            <SearchBar/>
        </div>
        <div className={styles['header-auth']}>
            <button className={styles['header-auth__btn']}>Log In</button>
        </div>
    </header>
);


export default Header;
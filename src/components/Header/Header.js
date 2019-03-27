import React from 'react';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles['header-logo']}>
            <a href="/" className={styles['header-logo__link']}>Films4U</a>
            <a href="/" className={styles['header-logo__link']}>Main</a>
        </div>
        <div className="Header-auth">
            <button>LogIn</button>
        </div>
    </header>
);

export default Header;
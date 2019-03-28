import React  from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

const SideBar = ({isActive}) => {
    console.log(isActive);
    return(
    <ul className={isActive ? `${styles['sidebar-menu']} ${styles.active}` : `${styles['sidebar-menu']}`}>
        <li className={styles['sidebar-menu__item']}>
            <NavLink
                exact={true}
                className={styles['sidebar-menu__link']}
                activeClassName={styles['is-active']}
                to='/'>
                <i className="fas fa-home fa-lg"></i>
            </NavLink>
        </li>
        <li className={styles['sidebar-menu__item']}>
            <NavLink className={styles['sidebar-menu__link']} activeClassName={styles['is-active']} to="/popular">Popular</NavLink>
        </li>
        <li className={styles['sidebar-menu__item']}>
            <NavLink className={styles['sidebar-menu__link']} activeClassName={styles['is-active']} to="/top-rated">Top Rated</NavLink>
        </li>
        <li className={styles['sidebar-menu__item']}>
            <NavLink className={styles['sidebar-menu__link']} activeClassName={styles['is-active']} to="/coming-soon">Coming Soon</NavLink>
        </li>
    </ul>
    );
};


export default SideBar;
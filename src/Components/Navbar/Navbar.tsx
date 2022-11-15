import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink className={({isActive}) => isActive ? styles.active : "" } to={'/Profile'}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => isActive ? styles.active : "" } to={'/Dialogs'}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => isActive ? styles.active : "" } to={'/News'}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => isActive ? styles.active : "" } to={'/Music'}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => isActive ? styles.active : "" } to={'/Settings'}>Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => isActive ? styles.active : "" } to={'/Users'}>Users</NavLink>
            </div>
        </nav>
    )
}
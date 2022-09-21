import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href={'/Profile'}>Profile</a>
            </div>
            <div className={styles.item}>
                <a href={'/Dialogs'}>Messages</a>
            </div>
            <div className={styles.item}>
                <a href={'/News'}>News</a>
            </div>
            <div className={styles.item}>
                <a href={'/Music'}>Music</a>
            </div>
            <div className={styles.item}>
                <a href={'/Settings'}>Settings</a>
            </div>
        </nav>
    )
}
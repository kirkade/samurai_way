import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (<header className={styles.header}>
            <img src={'https://adamlevin.com/wp-content/uploads/2020/06/joomla-logo-png-transparent.png'} alt={'logo'}></img>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? 'Free'
                    : <NavLink to={'/login'}>Login</NavLink>

                }
            </div>

        </header>
    )
}
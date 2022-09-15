import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'}></img>
            </div>
            <div>
                ava+descript
            </div>
            <MyPosts />

        </div>
    )
}
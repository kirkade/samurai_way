import styles from './ProfileInfo.module.css'
import {MyPosts} from "../MyPosts";
import React from "react";


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava+descript
            </div>
            <MyPosts />
        </div>
    )
}
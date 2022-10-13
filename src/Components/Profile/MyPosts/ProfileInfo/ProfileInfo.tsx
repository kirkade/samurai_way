import styles from './ProfileInfo.module.css'
import {MyPosts} from "../MyPosts";
import React from "react";
import {ProfilePageType} from "../../../../redux/state";


export const ProfileInfo = (props:ProfilePageType) => {
    return (
        <div>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava+descript
            </div>
            <MyPosts posts={props.posts} addPostCallback={props.addPostCallback}/>
        </div>
    )
}
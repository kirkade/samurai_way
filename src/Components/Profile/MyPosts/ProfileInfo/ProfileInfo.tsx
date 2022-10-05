import styles from './ProfileInfo.module.css'
import {MyPosts} from "../MyPosts";
import React from "react";
import {PostsType} from "../../Profile";


export const ProfileInfo = (props:PostsType) => {
    return (
        <div>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava+descript
            </div>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
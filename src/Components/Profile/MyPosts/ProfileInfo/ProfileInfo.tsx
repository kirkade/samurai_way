import styles from './ProfileInfo.module.css'
import {MyPosts} from "../MyPosts";
import React from "react";
import {PostsType} from "../../../../redux/state";

type ProfileInfoPropsType = {
    dispatch:any
    posts: Array<PostsType>
}


export const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'} alt={'avatar'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava+descript
            </div>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
}
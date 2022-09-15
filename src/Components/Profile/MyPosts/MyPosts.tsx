import React from "react";
import styles from 'MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <Post message='Hi, how are you?' likeCounts={7}/>
            <Post message='My first post' likeCounts={12}/>
            <Post/>
            <Post/>
        </div>
    )
}


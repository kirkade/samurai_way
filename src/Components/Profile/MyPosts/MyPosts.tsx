import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Hi, how are you?' likeCounts={7}/>
                <Post message='My first post' likeCounts={12}/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}


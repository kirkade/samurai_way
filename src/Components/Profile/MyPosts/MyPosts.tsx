import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../Profile";

export const MyPosts = (props: PostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={7}/>)

    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}


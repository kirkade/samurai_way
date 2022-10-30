import React, {ChangeEvent, useState} from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    addPost: (message:string)=>void
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let [message, setMessage] = useState<string>('')

    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(message)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value)
    }

    return (
        <div className={styles.postsBlock}>
            <div>
                <input onChange={onChangeHandler} type="text"/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}


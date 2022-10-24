import React, {ChangeEvent, useState} from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreator, PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    dispatch: any
    posts: Array<PostsType>
}


export const MyPosts = (props: MyPostsPropsType) => {

    let [message, setMessage] = useState<string>('')

    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount}/>)

    const addPost = () => {
        let action = addPostActionCreator(message)
        props.dispatch(action)
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
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}


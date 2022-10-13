import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPost, ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {

    let messageRef = React.createRef<HTMLTextAreaElement>()

    let postsElements = props.posts.map( p => <Post message={p.message} likeCounts={7}/>)

    const onClickHandler = () => {
        addPost( messageRef.current ? messageRef.current.value : '----' )
    }

    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea ref={messageRef}></textarea>
            </div>
            <div>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}


import React from "react";
import {addPostActionCreator} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props: any) => {

    let state = props.store.getState()

    const addPost = (text: string) => {
        let action = addPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div>
            <MyPosts addPost={addPost} posts={state.profilePage.posts}/>
        </div>
    )
}


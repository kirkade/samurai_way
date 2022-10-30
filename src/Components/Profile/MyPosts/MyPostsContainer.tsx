import React from "react";
import {addPostActionCreator} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {

                    let state = store.getState()

                    const addPost = (text: string) => {
                        let action = addPostActionCreator(text)
                        store.dispatch(action)
                    }

                    return <MyPosts addPost={addPost} posts={state.profilePage.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}


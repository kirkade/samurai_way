import {PostsType} from "../store";
import React from "react";
import App from "../../App";
import {root} from "../../index";

const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 23},
    ],
}

export const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.messageText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            root.render(<App/>);
            return state
        default:
            return state
    }

}

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: ADD_POST,
        messageText: postMessage
    }
}

import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

export type PostsType = {
    posts: Array<PostsArrayType>
}

export type PostsArrayType = {
    id: number,
    message:string,
}

export const Profile = (props:PostsType) => {
    return (
        <div>
            <ProfileInfo posts={props.posts}/>
        </div>
    )
}
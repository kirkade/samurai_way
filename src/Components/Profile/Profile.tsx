import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";

export type PostsType = {
    state:ProfilePageType,
    dispatch:any,
}

export const Profile = (props:PostsType) => {
    return (
        <div>
            <ProfileInfo posts={props.state.posts} dispatch={props.dispatch}/>
        </div>
    )
}
import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type PostsType = {
    state:ProfilePageType,
    addPostCallback:(message:string)=>void
}

export const Profile = (props:PostsType) => {
    return (
        <div>
            <ProfileInfo posts={props.state.posts} addPostCallback={props.addPostCallback}/>
        </div>
    )
}
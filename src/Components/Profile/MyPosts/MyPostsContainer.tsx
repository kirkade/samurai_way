import React from "react";
import {addPostActionCreator} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state:any) => {
    return {
       posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return {
        addPost: (text:string) => {
            let action = addPostActionCreator(text)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


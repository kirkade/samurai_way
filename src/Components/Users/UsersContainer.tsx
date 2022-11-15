import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";


let mapStateToProps = (state:any) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (id:number) => {
            dispatch(followAC(id))
        },
        unfollow: (id:number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        },

    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)


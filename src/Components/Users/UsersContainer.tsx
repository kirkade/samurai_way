import React from 'react';
import {connect} from "react-redux";

import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/reducers/usersReducer";
import {UsersC} from "./UsersC";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';

type mapStateToPropsType = {
    users:Array<UserType>
}
type mapDispatchToPropsType = {
    follow: (id:number) => void
    unfollow: (id:number) => void
    setUsers: (users:Array<UserType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:AppStateType): mapStateToPropsType => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (id:number) => {
            dispatch(followAC(id))
        },
        unfollow: (id:number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)


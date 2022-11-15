import React from 'react';

export type StateType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    photoUrl:string
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl:'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'im a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl:'https://static01.nyt.com/images/2022/05/19/opinion/firstpersonPromo/firstpersonPromo-videoSixteenByNine3000.jpg',
        //     followed: true,
        //     fullName: 'Sasha',
        //     status: 'im a second boss',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl:'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
        //     followed: false,
        //     fullName: 'Petya',
        //     status: 'im a third boss',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ]
}

type ActionType = FollowActionType | unFollowActionType | setUsersActionType
type FollowActionType = {
    type: 'Follow'
    id: number
}
type unFollowActionType = {
    type: 'Unfollow'
    id: number
}
type setUsersActionType = {
    type: 'SetUsers'
    users:Array<UserType>
}

export const UsersReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "Follow":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        case "Unfollow":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        case 'SetUsers':
            return {...state,users: [...state.users,...action.users]}
        default:
            return state
    }

};

export const followAC = (id: number): FollowActionType => ({type: 'Follow', id})
export const unfollowAC = (id: number):unFollowActionType => ({type: 'Unfollow', id})
export const setUsersAC = (users:Array<UserType>) => ({type: 'SetUsers', users})
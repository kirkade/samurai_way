
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

let initialState:usersStateType = {
    users: [],
    pageSize:5,
    totalUsersCount: 20,
    currentPage:1
}
export type usersStateType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
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

export const UsersReducer = (state: usersStateType = initialState, action: ActionType):usersStateType => {
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
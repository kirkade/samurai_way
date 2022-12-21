export type UserType = {
    followed: boolean,
    id: number
    name: string
    photos: {
        large: string,
        small: string,
    }
    photoUrl?: string
    uniqueUrlName?: string
    fullName?: string,
    status?: string,
}


let initialState: usersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export type usersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type ActionType =
    FollowActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | followingInProgressActionType

type FollowActionType = {
    type: 'FOLLOW'
    id: number
}
type unFollowActionType = {
    type: 'UNFOLLOW'
    id: number
}
type setUsersActionType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type followingInProgressActionType = ReturnType<typeof toggleFollowingProgress>

export const UsersReducer = (state: usersStateType = initialState, action: ActionType): usersStateType => {
    switch (action.type) {
        case "FOLLOW":
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
        case "UNFOLLOW":
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
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.count}
        case 'TOGGLE_ISFETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,

                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }

        default:
            return state
    }

};

export const follow = (id: number): FollowActionType => ({type: 'FOLLOW', id})
export const unfollow = (id: number): unFollowActionType => ({type: 'UNFOLLOW', id})
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users})
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (count: number) => ({type: 'SET_TOTAL_USERS_COUNT', count} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_ISFETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userID
} as const)
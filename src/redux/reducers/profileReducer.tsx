

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 23},
    ],
    profile: null
}

type ProfileStateType = {
    posts:Array<PostsType>,
    profile: null | ProfileType
}

export type ProfileType = {
    aboutMe: string
    contacts: any,
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {small: string, large: string}
    userId:number
}

type PostsType = {
    id:number
    message:string
    likesCount:number
}

type addPostActionType = ReturnType<typeof addPostActionCreator>
type setUserProfiletActionType = ReturnType<typeof setUserProfile>

type ActionType = addPostActionType | setUserProfiletActionType

export const profileReducer = (state: ProfileStateType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.messageText,
                likesCount: 0,
            }
            return {...state, posts: [...state.posts, newPost]}
        case SET_USER_PROFILE:
                return {...state,profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = (postMessage: string) => {
    return { type: ADD_POST, messageText: postMessage } as const
}

export const setUserProfile = (profile:ProfileType) => {
    return { type: SET_USER_PROFILE, profile} as const
}



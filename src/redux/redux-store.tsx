import {combineReducers,createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {UsersReducer} from "./reducers/usersReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:UsersReducer,
})

export const store = createStore(rootReducer)

console.log(store.getState())

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store


export type StateMessagesType = {
    id: number,
    message: string,
}

export type StateDialogsType = {
    id: number,
    name: string,
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
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




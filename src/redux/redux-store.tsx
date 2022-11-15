import {combineReducers,createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {UsersReducer} from "./reducers/usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:UsersReducer,
})

export const store = createStore(reducers)

console.log(store.getState())




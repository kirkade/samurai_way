import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export let store = configureStore({
    reducer: profileReducer
})

console.log(store.getState())


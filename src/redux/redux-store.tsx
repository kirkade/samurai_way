import {combineReducers,createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
})

export const store = createStore(reducers)

console.log(store.getState())




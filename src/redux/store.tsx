import {root} from "../index";
import App from "../App";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";

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

export type ProfilePageType = {
    posts: Array<PostsType>,
}

export type MessagePageType = {
    dialogs: Array<StateDialogsType>,
    messages: Array<StateMessagesType>,
}


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'My first post', likesCount: 23},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Victor'},
                {id: 4, name: 'Anastasia'},
                {id: 5, name: 'Olga'},
            ],
            messages: [
                {id: 1, message: 'Whatsup'},
                {id: 2, message: 'Hey?'},
                {id: 3, message: 'Yo?'},
            ],
            newMessageBody: ''
        },
    },
    getState() {
        return this._state
    },

    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        root.render(<App/>)

    }

}




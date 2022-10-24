import {root} from "../index";
import App from "../App";

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

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: MessagePageType,
}

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE='SEND-MESSAGE'

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

        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.messageText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            console.log(this._state.profilePage.posts)
            root.render(<App/>)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            root.render(<App/>)
        }
        else if (action.type === SEND_MESSAGE) {
            let body = action.messageText
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id:new Date().getTime(),message: body})
            root.render(<App/>)
        }

    }


}

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: ADD_POST,
        messageText: postMessage
    }
}

export const sendMessageActionCreator = (message: string) => {
    return {
        type: SEND_MESSAGE,
        messageText: message
    }
}

import {root} from "../../index";
import App from "../../App";
import React from "react";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = action.messageText
            state.newMessageBody = ''
            state.messages.push({id: new Date().getTime(), message: body})
            root.render(<App/>);
            return state
        default:
            return state

    }

}

export const sendMessageActionCreator = (message: string) => {
    return {
        type: SEND_MESSAGE,
        messageText: message
    }
}
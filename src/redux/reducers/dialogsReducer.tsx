


const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogsStateType = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
    newMessageBody:string
}

export type DialogsType = {
    id:number,
    name:string
}

export type MessagesType ={
    id:number
    message:string
}

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


export const dialogsReducer = (state: DialogsStateType = initialState, action:any) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messageBody = action.messageText
            return {...state, messages: [...state.messages,{id: new Date().getTime(), message: messageBody} ]}


        default:
            return state

    }

}

export const sendMessageActionCreator = (message: string) => {
    return {type: SEND_MESSAGE, messageText: message}
}


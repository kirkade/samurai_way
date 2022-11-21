const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Anastasia'},
        {id: 5, name: 'Olga'},
    ] as Array<DialogsType>,

    messages: [
        {id: 1, message: 'Whatsup'},
        {id: 2, message: 'Hey?'},
        {id: 3, message: 'Yo?'},
    ] as Array<MessagesType>,

    newMessageBody: ''
}

export type dialogsStateType = typeof initialState

type sendMessageAT = ReturnType<typeof sendMessageActionCreator>
type ActionType = sendMessageAT

export const dialogsReducer = (state: dialogsStateType = initialState, action: ActionType): dialogsStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messageBody = action.messageText
            return {...state, messages: [...state.messages, {id: new Date().getTime(), message: messageBody}]}


        default:
            return state

    }

}

export const sendMessageActionCreator = (message: string) => {
    return {type: SEND_MESSAGE, messageText: message} as const
}


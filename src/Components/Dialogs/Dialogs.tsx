import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import { nanoid } from 'nanoid'

import {ChangeEvent, useState} from "react";
import {sendMessageActionCreator} from "../../redux/reducers/dialogsReducer";

type DialogsType = {
    dialogsPage: any
    sendMessage: any
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    const [message, setMessage] = useState<string>('')

    let dialogsElements = state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = state.messages.map((m: { message: string; }) => <Message message={m.message} key={nanoid()}/>)

    const sendMessage = () => {
        let action = sendMessageActionCreator(message)
        props.sendMessage(action)
        setMessage('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea onChange={onChangeHandler} value={message} className={styles.textarea}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>

        </div>
    )
}
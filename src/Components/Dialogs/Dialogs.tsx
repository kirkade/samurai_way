import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagePageType} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {sendMessageActionCreator} from "../../redux/reducers/dialogsReducer";

type DialogsType = {
    state: MessagePageType,
    dispatch: (action:any)=>void
}

export const Dialogs = (props:DialogsType) => {

    const [message, setMessage] = useState<string>('')

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const sendMessage = () => {
        let action = sendMessageActionCreator(message)
        props.dispatch(action)
        setMessage('')
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
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
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsType = {
    dialogs: Array<DialogsArrayType>
    messages:Array<MessagesArrayType>
}

type DialogsArrayType = {
    id:number,
    name:string,
}

type MessagesArrayType = {
    id: number,
    message:string,
}

export const Dialogs = (props:DialogsType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
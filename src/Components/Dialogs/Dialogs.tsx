import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagePageType} from "../../redux/state";

type DialogsType = {
    state: MessagePageType,
}

export const Dialogs = (props:DialogsType) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)


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
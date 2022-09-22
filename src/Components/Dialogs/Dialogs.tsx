import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name:string
    id:number
}

const DialogItem = (props:DialogItemType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message:string
}

const Message = (props:MessageType) => {
    return(
        <div className={styles.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Sasha'} id={2}/>
                <DialogItem name={'Victor'} id={3}/>
                <DialogItem name={'Anastasia'} id={4}/>
                <DialogItem name={'Olga'} id={5}/>
            </div>
            <div className={styles.messages}>
                <Message message={'Whatsup?'}/>
                <Message message={'Hey?'}/>
                <Message message={'Yo?'}/>
            </div>
        </div>
    )
}
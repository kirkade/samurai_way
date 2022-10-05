import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


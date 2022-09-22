import styles from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Nikolay
                </div>
                <div className={styles.dialog}>
                    Sasha
                </div>
                <div className={styles.dialog}>
                    Victor
                </div>
                <div className={styles.dialog}>
                    Anastasia
                </div>
                <div className={styles.dialog}>
                    Olga
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hey,Im your message</div>
                <div className={styles.message}>Hey,Im your message</div>
                <div className={styles.message}>Hey,Im your message</div>
            </div>
        </div>
    )
}
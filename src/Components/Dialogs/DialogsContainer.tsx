
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store:any
}

export const DialogsContainer = (props:DialogsType) => {

    let state = props.store.getState().dialogsPage

    const sendMessage = (message:string) => {

        props.store.dispatch(message)

    }

    return (
        <div >
            <Dialogs sendMessage={sendMessage} dialogsPage={state}/>
        </div>
    )
}
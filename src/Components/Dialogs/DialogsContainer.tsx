import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
                    let state = store.getState().dialogsPage

                    const sendMessage = (message: string) => {
                        store.dispatch(message)
                    }

                    return <Dialogs sendMessage={sendMessage} dialogsPage={state}/>
                }
            }

        </StoreContext.Consumer>
    )
}
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state:any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        sendMessage: (message:string) => {dispatch(message)}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
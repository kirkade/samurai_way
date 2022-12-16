import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserDataAC} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    let {id,login,email} = response.data.data
                    this.props.setAuthUserDataAC(id,login,email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state:any) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps,{setAuthUserDataAC})(HeaderContainer)
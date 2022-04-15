import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {
    loginThunkCreate,
    setUserDataCreate,
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {getStatusMessage, getUid} from "../../redux/select/user-selector";
import {updateUserDataThunkCreate} from "../../redux/user-reducer";
import {getInitial} from "../../redux/select/app-selector";

const LoginContainer = (props) => {
    if (props.isAuth && props.isInitialized) return <Navigate to={`/profile/${props.myId}`}/>
    return <Login {...props}/>
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        status_message: getStatusMessage(state),
        myId: getUid(state),
        isInitialized: getInitial(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            logIn: loginThunkCreate,
            getUser: updateUserDataThunkCreate,
            setUser: setUserDataCreate,
        }),
)(LoginContainer)


import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {
    loginThunkCreate,
    setUserDataCreate,
    updateUserDataThunkCreate
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginContainer = (props) => {
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return <Login {...props}/>
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
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


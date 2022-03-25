import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreate} from "../../redux/auth-reducer";
import {getName, getUid} from "../../redux/select/user-selector";
import {Redirect} from "react-router-dom";
import {getInitial} from "../../redux/select/app-selector";

const HeaderContainer = (props) => {
    return <Header
        isAuth={props.isAuth}
        logOut ={props.logOut}
        login={props.login}
        username={props.username}
        myId={props.myId}
    />
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        username: getName(state),
        myId: getUid(state),
    }
}

export default connect(MapStateToProps,
    {
        logOut: logoutThunkCreate,
    }
)(HeaderContainer);

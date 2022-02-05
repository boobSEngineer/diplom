import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreate} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return <Header
        isAuth={props.isAuth}
        logOut ={props.logOut}
        login={props.login}
    />
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(MapStateToProps,
    {
        logOut: logoutThunkCreate,
    }
)(HeaderContainer);

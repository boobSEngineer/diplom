import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreate} from "../../redux/auth-reducer";
import {getAuth, getName, getUid} from "../../redux/select/user-selector";

const HeaderContainer = (props) => {

    return <Header
        isAuth={props.isAuth}
        logOut={props.logOut}
        login={props.login}
        username={props.username}
        myId={props.myId}
        updateQuery={props.updateQuery}
    />
}

const MapStateToProps = (state) => {
    return {
        isAuth: getAuth(state),
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

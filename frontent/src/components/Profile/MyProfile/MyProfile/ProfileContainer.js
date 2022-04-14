import React, {useEffect} from "react";
import Profile from "./Profile";
import {getLogin, getName, getStatusMessage, getUid} from "../../../../redux/select/user-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsById} from "../../../../redux/select/fonts-selector";
import {
    logoutThunkCreate,
    updateCurrentUserDataThunkCreate,
} from "../../../../redux/auth-reducer";
import {getInitial} from "../../../../redux/select/app-selector";

const ProfileContainer = (props) => {
    useEffect(() => {
        props.updateCurrentUser()
    }, []);

    return <Profile
        username={props.username}
        login={props.login}
        id_user={props.id_user}
        setFonts={props.setFonts}
        fonts={props.fonts}
        logOut ={props.logOut}

    />
}

const MapStateToProps = (state) => {
    return {
        username: getName(state),
        login: getLogin(state),
        id_user: getUid(state),
        isAuth: state.auth.isAuth,
        fonts:getFontsById(state),
        status_message: getStatusMessage(state),
        isInitialized: getInitial(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            logOut: logoutThunkCreate,
            updateCurrentUser:updateCurrentUserDataThunkCreate
        }),
)(ProfileContainer)



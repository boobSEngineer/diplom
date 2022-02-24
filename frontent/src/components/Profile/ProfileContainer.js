import React, {useEffect} from "react";
import Profile from "./Profile";
import {getLogin, getName, getStatusMessage, getUid} from "../../redux/select/user-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFonts} from "../../redux/select/fonts-selector";
import {RequestCurrentFontsThunkCreate} from "../../redux/fonts-reducer";

const ProfileContainer = (props) => {
    useEffect(() => {
        props.RequestCurrentFontsThunkCreate(props.id_user)
    }, [props.id_user]);

    return <Profile
        username={props.username}
        login={props.login}
        id_user={props.id_user}
        setFonts={props.setFonts}
        fonts={props.fonts}

    />
}

const MapStateToProps = (state) => {
    return {
        username: getName(state),
        login: getLogin(state),
        id_user: getUid(state),
        isAuth: state.auth.isAuth,
        fonts:getFonts(state),
        status_message: getStatusMessage(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            RequestCurrentFontsThunkCreate
        }),
)(ProfileContainer)



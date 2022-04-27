import React, {useEffect} from "react";
import {getAuth, getNameById, getUid} from "../../../redux/select/user-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {useMatch, useParams} from "react-router-dom";
import {updateUserDataThunkCreate} from "../../../redux/user-reducer";
import ProfileInfo from "./ProfileInfo";
import {getFontsById} from "../../../redux/select/fonts-selector";
import {likeFontThunkCreate, RequestFontsByIdThunkCreate} from "../../../redux/fonts-reducer";

const ProfileInfoContainer = (props) => {
    const match = null
    let { id_user } = useParams();
    useEffect(() => {
        if (!id_user) {
            id_user = 1;
        }
        props.updateUser(id_user)
    }, [id_user]);

    useEffect(() => {
        props.requestFontsById(id_user)
    }, [id_user]);

    id_user = parseInt(id_user)

    return <ProfileInfo
        id_user={id_user}
        usernameById={props.usernameById}
        my_id={props.myId}
        fontsByid={props.fonts}
        likeFont={props.likeFont}
        isAuth={props.isAuth}

    />
}

const MapStateToProps = (state) => {
    return {
        usernameById: getNameById(state),
        myId: getUid(state),
        fonts: getFontsById(state),
        isAuth: getAuth(state)
    }
};

export default compose(
    connect(MapStateToProps,
        {
            updateUser:updateUserDataThunkCreate,
            requestFontsById:RequestFontsByIdThunkCreate,
            likeFont:likeFontThunkCreate,

        }),
)(ProfileInfoContainer)

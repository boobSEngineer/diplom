import React, {useEffect} from "react";
import { getNameById, getUid} from "../../../redux/select/user-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateUserDataThunkCreate} from "../../../redux/user-reducer";
import ProfileInfo from "./ProfileInfo";
import {getFontsById} from "../../../redux/select/fonts-selector";
import {RequestFontsByIdThunkCreate} from "../../../redux/fonts-reducer";

const ProfileInfoContainer = (props) => {
    let user_id = props.match && props.match.params.id_user;
    useEffect(() => {
        if (!user_id) {
            user_id = 1;
        }
        props.updateUser(user_id)
    }, [user_id]);

    useEffect(() => {
        props.requestFontsById(user_id)
    }, [user_id]);

    user_id = parseInt(user_id)

    return <ProfileInfo
        id_user={user_id}
        usernameById={props.usernameById}
        my_id={props.myId}
        fontsByid={props.fonts}

    />
}

const MapStateToProps = (state) => {
    return {
        usernameById: getNameById(state),
        myId: getUid(state),
        fonts: getFontsById(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            updateUser:updateUserDataThunkCreate,
            requestFontsById:RequestFontsByIdThunkCreate

        }),
)(ProfileInfoContainer)

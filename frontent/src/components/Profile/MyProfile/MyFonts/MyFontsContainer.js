import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsById} from "../../../../redux/select/fonts-selector";
import MyFonts from "./MyFonts";
import {
    deleteFontByIdThunkCreate,
    RequestFontsByIdThunkCreate
} from "../../../../redux/fonts-reducer";
import {getCurrentUser, getUid} from "../../../../redux/select/user-selector";

const MyFontsContainer = (props) => {
    useEffect(() => {
        props.requestFontsById(props.id)
    }, [props.id]);

    return <MyFonts
        fonts={props.fonts}
        deleteFontById={props.deleteFontById}
        id_user={props.id_user}
    />
}

const MapStateToProps = (state) => {
    return {
        id: getCurrentUser(state),
        fonts: getFontsById(state),
        id_user: getUid(state)
    }
};

export default compose(
    connect(MapStateToProps,
        { requestFontsById:RequestFontsByIdThunkCreate,
            deleteFontById:deleteFontByIdThunkCreate,
        }),
)(MyFontsContainer)

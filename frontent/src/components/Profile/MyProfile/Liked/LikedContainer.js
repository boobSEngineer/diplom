import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsByCurrentId, getFontsById} from "../../../../redux/select/fonts-selector";
import Liked from "./Liked";
import {RequestFontsByIdThunkCreate} from "../../../../redux/fonts-reducer";
import {getCurrentUser} from "../../../../redux/select/user-selector";

const LikedContainer = (props) => {
    useEffect(() => {
        props.requestFontsById(props.id)
    }, [props.id]);

    return <Liked
        fonts={props.fonts}/>
}

const MapStateToProps = (state) => {
    return {
        id: getCurrentUser(state),
        fonts: getFontsById(state),
    }
};

export default compose(
    connect(MapStateToProps,
        { requestFontsById:RequestFontsByIdThunkCreate}),
)(LikedContainer)

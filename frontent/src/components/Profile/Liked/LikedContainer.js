import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsByCurrentId} from "../../../redux/select/fonts-selector";
import Liked from "./Liked";
import {RequestCurrentFontsThunkCreate} from "../../../redux/fonts-reducer";
import {getCurrentUser} from "../../../redux/select/user-selector";

const LikedContainer = (props) => {
    useEffect(() => {
        props.requestCurrentFonts(props.id)
    }, []);

    return <Liked
        fonts={props.fonts}/>
}

const MapStateToProps = (state) => {
    return {
        id: getCurrentUser(state),
        fonts: getFontsByCurrentId(state),
    }
};

export default compose(
    connect(MapStateToProps,
        { requestCurrentFonts:RequestCurrentFontsThunkCreate}),
)(LikedContainer)

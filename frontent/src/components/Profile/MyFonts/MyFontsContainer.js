import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsByCurrentId} from "../../../redux/select/fonts-selector";
import MyFonts from "./MyFonts";
import {RequestCurrentFontsThunkCreate} from "../../../redux/fonts-reducer";
import {getCurrentUser} from "../../../redux/select/user-selector";

const MyFontsContainer = (props) => {
    useEffect(() => {
        props.requestCurrentFonts(props.id)
    }, []);

    return <MyFonts
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
)(MyFontsContainer)

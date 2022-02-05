import React, {useEffect} from "react";
import {RequestFontsThunkCreate} from "../../redux/fonts-reducer";
import Font from "./Font";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFonts} from "../../redux/select/fonts-selector";

const FontsContainer = (props) => {
    useEffect(() => {
        props.requestFonts()
    }, []);

    return <Font
            fonts={props.fonts}/>
}

const MapStateToProps = (state) => {
    return {
        fonts: getFonts(state),
    }
};

export default compose(
    connect(MapStateToProps,
        { requestFonts:RequestFontsThunkCreate}),
)(FontsContainer)

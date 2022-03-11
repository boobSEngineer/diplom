import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import UploadFonts from "./UploadFonts";

const UploadFontsContainer = (props) => {
    return <UploadFonts
        fonts={props.fonts}/>
}

const MapStateToProps = (state) => {
    return {

    }
};

export default compose(
    connect(MapStateToProps,
        { }),
)(UploadFontsContainer)

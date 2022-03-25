import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import UploadFonts from "./UploadFonts";
import {getName} from "../../../../redux/select/user-selector";

const UploadFontsContainer = (props) => {
    return <UploadFonts
        fonts={props.fonts}
        username={props.username}/>
}

const MapStateToProps = (state) => {
    return {
        username: getName(state),
    }
};

export default compose(
    connect(MapStateToProps,
        { }),
)(UploadFontsContainer)

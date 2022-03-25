import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import ProfileSettings from "./ProfileSettings";

const ProfileSettingsContainer = (props) => {
    return <ProfileSettings
        fonts={props.fonts}/>
}

const MapStateToProps = (state) => {
    return {

    }
};

export default compose(
    connect(MapStateToProps,
        { }),
)(ProfileSettingsContainer)

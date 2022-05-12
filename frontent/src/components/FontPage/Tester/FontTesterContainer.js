import React from "react";
import FontTester from "./FontTester";
import {getCurrentFont} from "../../../redux/select/fonts-selector";
import {compose} from "redux";
import {connect} from "react-redux";

const FontTesterContainer = (props) => {

    return <FontTester
        current_font = {props.current_font}
    />
}
const MapStateToProps = (state) => {
    return {
        current_font: getCurrentFont(state),
    }
};
export default compose(
    connect(MapStateToProps,
        {}),
)(FontTesterContainer);

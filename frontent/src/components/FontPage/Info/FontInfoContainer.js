import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import FontPageInfo from "../Info/FontPageInfo";
import {getCurrentFont} from "../../../redux/select/fonts-selector";

const FontInfoContainer = (props) => {
    return <FontPageInfo
            font = {props.current_font}/>
}

const MapStateToProps = (state) => {
    return {
        current_font: getCurrentFont(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {}),
)(FontInfoContainer)

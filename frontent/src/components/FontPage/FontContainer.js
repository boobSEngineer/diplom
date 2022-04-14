import React, {useEffect} from "react";
import {getFontThunkCreate} from "../../redux/fonts-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCurrentFont} from "../../redux/select/fonts-selector";
import FontPage from "./FontPage";

const FontContainer = (props) => {
    let font_id = props.match && props.match.params.id_font;
    useEffect(() => {
        props.getFont(font_id)
    }, [font_id]);

    font_id = parseInt(font_id)

    return <FontPage
            font = {props.current_font}/>
}

const MapStateToProps = (state) => {
    return {
        current_font: getCurrentFont(state),
    }
};

export default compose(
    connect(MapStateToProps,
        { getFont:getFontThunkCreate}),
)(FontContainer)

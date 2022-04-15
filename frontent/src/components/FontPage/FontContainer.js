import React, {useEffect} from "react";
import {getFontThunkCreate} from "../../redux/fonts-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCurrentFont} from "../../redux/select/fonts-selector";
import FontPage from "./FontPage";
import {useMatch, useParams} from "react-router-dom";

const FontContainer = (props) => {
    let { id_font } = useParams();
    useEffect(() => {
        props.getFont(id_font)
    }, [id_font]);
    id_font = parseInt(id_font)

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

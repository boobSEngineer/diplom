import React, {useEffect} from "react";
import {getFontThunkCreate, likeForCurrentFontThunkCreate} from "../../redux/fonts-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCurrentFont} from "../../redux/select/fonts-selector";
import FontPage from "./FontPage";
import {useParams} from "react-router-dom";
import {getAuth} from "../../redux/select/user-selector";

const FontContainer = (props) => {
    let {id_font} = useParams();

    useEffect(() => {
        props.getFont(id_font)
    }, [id_font]);
    id_font = parseInt(id_font);

    return <FontPage
        font={props.current_font}
        likeCurrentFont={props.likeCurrentFont}
        isAuth={props.isAuth}
    />
}

const MapStateToProps = (state) => {
    return {
        current_font: getCurrentFont(state),
        isAuth: getAuth(state)
    }
};

export default compose(
    connect(MapStateToProps,
        {
            getFont: getFontThunkCreate,
            likeCurrentFont: likeForCurrentFontThunkCreate
        }),
)(FontContainer)

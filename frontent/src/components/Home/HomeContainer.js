import React, {useEffect} from "react";
import Home from "./Home";
import {getFontsById, getStatusSuccess} from "../../redux/select/fonts-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    likeFontThunkCreate,
    RequestFontsThunkCreate, selectFontsByThunkCreate,
} from "../../redux/fonts-reducer";
import {getAuth} from "../../redux/select/user-selector";
import {useSearchParams} from "react-router-dom";

const HomeContainer = (props) => {
    let query = Object.fromEntries([...useSearchParams()[0]]); // thanks stackoverflow

    useEffect(() => {
        props.selectFontsBy(query)
    }, [window.location.search]);

    return <Home
        fonts={props.fonts}
        isAuth={props.isAuth}
        selectFontsBy={props.selectFontsBy}
        requestFonts={props.requestFonts}
        updateQuery={props.updateQuery}
        likeFont={props.likeFont}
        success={props.success}
    />
}

const MapStateToProps = (state) => {
    return {
        fonts: getFontsById(state),
        isAuth: getAuth(state),
        success: getStatusSuccess(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            requestFonts: RequestFontsThunkCreate,
            selectFontsBy: selectFontsByThunkCreate,
            likeFont:likeFontThunkCreate,
        }),
)(HomeContainer)

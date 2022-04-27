import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsById} from "../../../../redux/select/fonts-selector";
import Liked from "./Liked";
import {
    getLikedFontsThunkCreate,
    likeFontThunkCreate,
    RequestFontsByIdThunkCreate, selectFontsByThunkCreate
} from "../../../../redux/fonts-reducer";
import {getCurrentUser} from "../../../../redux/select/user-selector";
import {useSearchParams} from "react-router-dom";

const LikedContainer = (props) => {
    let query = Object.fromEntries([...useSearchParams()[0]]); // thanks stackoverflow
    useEffect(() => {
        props.selectFontsBy({...query, liked:"liked_fonts"})
    }, [window.location.search]);


    useEffect(() => {
        props.likedFonts(props.id)
    },[])

    return <Liked
        fonts={props.fonts}
        likeFont={props.likeFont}
        updateQuery={props.updateQuery}/>
}

const MapStateToProps = (state) => {
    return {
        id: getCurrentUser(state),
        fonts: getFontsById(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            requestFontsById: RequestFontsByIdThunkCreate,
            likedFonts: getLikedFontsThunkCreate,
            likeFont:likeFontThunkCreate,
            selectFontsBy:selectFontsByThunkCreate
        }),
)(LikedContainer)

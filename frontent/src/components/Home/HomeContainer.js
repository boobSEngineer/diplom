import React, {useEffect} from "react";
import Home from "./Home";
import {getFontsById} from "../../redux/select/fonts-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    RequestFontsThunkCreate,
    SortFontsByDataThunkCreate,
    SortFontsByLikeThunkCreate, SortFontsByViewsThunkCreate
} from "../../redux/fonts-reducer";
import {getAuth} from "../../redux/select/user-selector";

const HomeContainer = (props) => {
    useEffect(() => {
        props.requestFonts()
    }, []);

    return <Home
        fonts={props.fonts}
        isAuth={props.isAuth}
        sortByLikes={props.sortByLikes}
        sortByData={props.sortByData}
        sortByViews={props.sortByViews}
        requestFonts={props.requestFonts}
    />
}

const MapStateToProps = (state) => {
    return {
        fonts: getFontsById(state),
        isAuth: getAuth(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            requestFonts: RequestFontsThunkCreate,
            sortByLikes: SortFontsByLikeThunkCreate,
            sortByData: SortFontsByDataThunkCreate,
            sortByViews: SortFontsByViewsThunkCreate
        }),
)(HomeContainer)

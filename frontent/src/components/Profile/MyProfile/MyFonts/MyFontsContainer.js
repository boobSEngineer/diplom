import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFontsById} from "../../../../redux/select/fonts-selector";
import MyFonts from "./MyFonts";
import {
    deleteFontByIdThunkCreate,
    RequestFontsByIdThunkCreate, selectFontsByThunkCreate
} from "../../../../redux/fonts-reducer";
import {getCurrentUser, getUid} from "../../../../redux/select/user-selector";
import {useSearchParams} from "react-router-dom";

const MyFontsContainer = (props) => {
    let query = Object.fromEntries([...useSearchParams()[0]]); // thanks stackoverflow

    useEffect(() => {
        props.selectFontsBy({...query, uploaded:"uploaded fonts"})
    }, [window.location.search]);

    useEffect(() => {
        props.requestFontsById(props.id)
    }, []);

    return <MyFonts
        fonts={props.fonts}
        deleteFontById={props.deleteFontById}
        id_user={props.id_user}
        updateQuery={props.updateQuery}
    />
}

const MapStateToProps = (state) => {
    return {
        id: getCurrentUser(state),
        fonts: getFontsById(state),
        id_user: getUid(state)
    }
};

export default compose(
    connect(MapStateToProps,
        { requestFontsById:RequestFontsByIdThunkCreate,
            deleteFontById:deleteFontByIdThunkCreate,
            selectFontsBy:selectFontsByThunkCreate
        }),
)(MyFontsContainer)

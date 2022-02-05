import React, {useEffect} from "react";
import Home from "./Home";
import {getFonts} from "../../redux/select/fonts-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {RequestFontsThunkCreate} from "../../redux/fonts-reducer";

const HomeContainer = (props) => {
    useEffect(() => {
        props.requestFonts()
    }, []);

    return <Home fonts={props.fonts}/>
}

const MapStateToProps = (state) => {
    return {
        fonts: getFonts(state),
    }
};

export default compose(
    connect(MapStateToProps,
        { requestFonts:RequestFontsThunkCreate}),
)(HomeContainer)

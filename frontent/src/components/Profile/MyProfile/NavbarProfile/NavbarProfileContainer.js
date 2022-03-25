import React from "react";
import {Redirect} from "react-router-dom";
import {getInitial} from "../../../../redux/select/app-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuth} from "../../../../redux/select/user-selector";
import NavbarProfile from "./NavbarProfile";


const NavbarProfileContainer = (props) => {
    if (!props.isAuth && props.isInitialized) return <Redirect to={"/login"}/>
    return <NavbarProfile/>
}

const MapStateToProps = (state) => {
    return {
        isInitialized: getInitial(state),
        isAuth:getAuth(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
        }),
)(NavbarProfileContainer)

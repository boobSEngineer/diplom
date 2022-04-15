import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Register from "./Register";
import {registerThunkCreate} from "../../../redux/auth-reducer";
import {getAuth, getStatusMessage} from "../../../redux/select/user-selector";
import {Navigate} from "react-router-dom";
import {getInitial} from "../../../redux/select/app-selector";

const RegisterContainer = (props) => {
    if (props.isAuth && props.isInitialized) return <Navigate to={"/panel_control"}/>
    return <Register
        register={props.register}
        status_message={props.status_message}
    />
}

const MapStateToProps = (state) => {
    return {
        isAuth: getAuth(state),
        status_message: getStatusMessage(state),
        isInitialized: getInitial(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            register:registerThunkCreate
        }),
)(RegisterContainer)

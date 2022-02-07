import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Register from "./Register";
import {registerThunkCreate} from "../../../redux/auth-reducer";

const RegisterContainer = (props) => {
    return <Register
        id_user={props.id_user}
        register={props.register}
    />
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(MapStateToProps,
        {
            register:registerThunkCreate
        }),
)(RegisterContainer)

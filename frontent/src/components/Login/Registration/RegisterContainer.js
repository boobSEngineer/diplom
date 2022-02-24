import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Register from "./Register";
import {registerThunkCreate} from "../../../redux/auth-reducer";
import {getStatusMessage} from "../../../redux/select/user-selector";

const RegisterContainer = (props) => {
    return <Register
        id_user={props.id_user}
        register={props.register}
    />
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        status_message: getStatusMessage(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            register:registerThunkCreate
        }),
)(RegisterContainer)

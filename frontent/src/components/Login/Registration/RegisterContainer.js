import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Register from "./Register";

const RegisterContainer = (props) => {
    return <Register
        id_user={props.id_user}
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
        }),
)(RegisterContainer)

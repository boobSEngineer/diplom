import React, {useEffect} from "react";
import {getUid} from "../../../../../redux/select/user-selector";
import Form from "./Form"
import {compose} from "redux";
import {connect} from "react-redux";
import {setStatusMessageAndSuccessCreate, uploadFontsThunkCreate} from "../../../../../redux/fonts-reducer";
import {getStatusSuccess, getStatusMessage} from "../../../../../redux/select/fonts-selector";

const FormContainer = (props) => {
    const handleSubmit  = (d) => {
        const data = new FormData();
        data.append('font', d.file[0]);
        data.append('full_name', d.full_name);
        data.append('version', d.version);
        data.append('license', d.license);
        data.append('about', d.about);
        props.uploadFontsThunkCreate(data);
    }


    return <Form
        id_user={props.id_user}
        handleSubmit = {handleSubmit}
        status_message={props.status_message}
        status_success={props.status_success}

    />
}

const MapStateToProps = (state) => {
    return {
        id_user: getUid(state),
        isAuth: state.auth.isAuth,
        status_message: getStatusMessage(state),
        status_success: getStatusSuccess(state),
    }
};

export default compose(
    connect(MapStateToProps,
        {
            setStatusMessageAndSuccessCreate,
            uploadFontsThunkCreate
        }),
)(FormContainer)

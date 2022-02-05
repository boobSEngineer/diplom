import React, {useEffect} from "react";
import {getUid} from "../../redux/select/user-selector";
import Form from "../Form/Form"
import {compose} from "redux";
import {connect} from "react-redux";
import {fileAPI} from "../../API/api2";

const FormContainer = (props) => {
    const handleSubmit  = (d) => {
        const data = new FormData();
        data.append('font', d.file[0]);
        data.append('full_name', d.full_name);
        data.append('version', d.version);
        data.append('license', d.license);
        data.append('about', d.about);
        fileAPI.uploadFile(data)
    }

    return <Form
        id_user={props.id_user}
        handleSubmit = {handleSubmit}

    />
}

const MapStateToProps = (state) => {
    return {
        id_user: getUid(state),
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(MapStateToProps,
        {
        }),
)(FormContainer)

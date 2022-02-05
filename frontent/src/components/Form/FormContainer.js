import React, {useEffect} from "react";
import {getUid} from "../../redux/select/user-selector";
import Form from "../Form/Form"
import {compose} from "redux";
import {connect} from "react-redux";
import {fileAPI} from "../../API/api2";

const FormContainer = (props) => {
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit  = (e) => {
        e.preventDefault()
        const data = new FormData();
        debugger
        data.append('font', selectedFile);
        fileAPI.uploadFile(data)
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }


    return <Form
        id_user={props.id_user}
        handleSubmit = {handleSubmit}
        handleFileSelect = {handleFileSelect}

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

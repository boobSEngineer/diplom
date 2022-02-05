import React, {useEffect} from "react";
import {getUid} from "../../redux/select/user-selector";
import Form from "../Form/Form"
import {compose} from "redux";
import {connect} from "react-redux";
import {fileAPI} from "../../API/api2";

const FormContainer = (props) => {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [fullName, setFullName] = React.useState("");
    const [version, setVersion] = React.useState("");
    const [license, setLicense] = React.useState("");
    const [about, setAbout] = React.useState("");

    const handleSubmit  = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('font', selectedFile);
        data.append('full_name', fullName);
        data.append('version', version);
        data.append('license', license);
        data.append('about', about);
        fileAPI.uploadFile(data)
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const handleFullNameChange = (event) => {
        setFullName(event.target.value)
    }
    const handleVersionChange = (event) => {
        setVersion(event.target.value)
    }
    const handleLicenseChange = (event) => {
        setLicense(event.target.value)
    }
    const handleAboutChange = (event) => {
        setAbout(event.target.value)
    }

    return <Form
        id_user={props.id_user}
        handleSubmit = {handleSubmit}
        handleFileSelect = {handleFileSelect}
        handleFullNameChange={handleFullNameChange}
        handleVersionChange={handleVersionChange}
        handleLicenseChange={handleLicenseChange}
        handleAboutChange={handleAboutChange}

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

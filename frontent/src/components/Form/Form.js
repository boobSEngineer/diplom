import React from 'react';
import axios from "axios";

const Form = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="file" onChange={props.handleFileSelect}/>
            <input type="submit" value="Upload File" />
        </form>
    )
}


export default Form;

import React from "react";
import FormContainer from "../Form/FormContainer";

const Profile = (props) => {
    return (
        <div>
            <div>
                Hello {props.username} your ID: {props.id_user}
            </div>
            <div>
                Your fonts: { props.fonts.map(f =>
                <div><div> {f.full_name} </div> <a href={`http://localhost:4000/file/fonts/${f.path}`}>download</a> </div>
            )}
            </div>
            <a href="/fonts"> фонты </a>
            <div>
                <FormContainer/>
            </div>
        </div>

    )
}

export default Profile

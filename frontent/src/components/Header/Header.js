import React from "react";
import {Redirect} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            {props.isAuth ?
                <div>
                    <div>{props.login}</div>
                    <button onClick={props.logOut}>Log out</button>
                </div>
                : <div>JKJKJKJ</div>//<Redirect to={"/login"}/>
            }
        </div>
    )
};
export default Header;

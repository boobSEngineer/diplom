import React from "react";
import {Redirect} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <div>
                {props.isAuth ?
                    <div>
                        <div>{props.login}</div>
                        <button onClick={props.logOut}>Log out</button>
                    </div>
                    : <a href="/login">Log In</a>
                }
            </div>
            <div>
                <a href="/fonts">Галерея</a>
                <a href="/profile">Профиль</a>
                <p>Создать новый</p>
            </div>
        </div>
    )
};
export default Header;

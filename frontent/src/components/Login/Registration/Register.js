import React from "react";
import {useForm} from "react-hook-form";
import s from "./Register.module.css";

const Register = (props) => {
    return (
        <div className={s.register_wrapper}>
            <h1>Регистрация</h1>
            <form>
                <label>
                    <p>Login</p>
                    <input type="text" name="login" placeholder="login"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;

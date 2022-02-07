import React from "react";
import s from "./Login.module.css";
import {useForm} from "react-hook-form";

const Login = (props) => {
    const {register, handleSubmit} = useForm();
    const handleError = (errors) => {
    };

    const processForm = (d) => {
        props.logIn(d.login, d.password)
    }

    return (
        <div className={s.login_wrapper}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(processForm, handleError)}>
                <label>
                    <p>Login</p>
                    <input type="text" name="login"
                           {...register('login')}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="password"
                           {...register('password')}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;

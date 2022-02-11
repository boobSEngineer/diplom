import React from "react";
import s from "./Login.module.css";
import {useForm} from "react-hook-form";

const Login = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleError = (errors) => {
    };

    const processForm = (d) => {
        props.logIn(d.login, d.password)
    }

    const registerOptions = {
        login: {required: "login is required"},
        password: {required: "password is required"},
    };


    return (
        <div className={s.login_wrapper}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(processForm, handleError)}>
                <label>
                    <p>Login</p>
                    <input type="text" name="login" placeholder="login"
                           {...register('login', registerOptions.login)}/>
                    <small className="text-danger">
                        {errors?.login && errors.login.message}
                    </small>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="password"
                           {...register('password', registerOptions.password)}/>
                    <small className="text-danger">
                        {errors?.password && errors.password.message}
                    </small>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;

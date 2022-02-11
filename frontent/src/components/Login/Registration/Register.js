import React from "react";
import {useForm} from "react-hook-form";
import s from "./Register.module.css";

const Register = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };
    const processForm = (d) => {
        props.register(d.login, d.username, d.password)
    };

    const registerOptions = {
        login: {required: "login is required"},
        username: {required: "username is required"},
        password: {required: "password is required"},
    };

    return (
        <div className={s.register_wrapper}>
            <h1>Регистрация</h1>
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
                    <p>Username</p>
                    <input type="text" name="username" placeholder="username"
                           {...register('username', registerOptions.username)}/>
                    <small className="text-danger">
                        {errors?.username && errors.username.message}
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

export default Register;

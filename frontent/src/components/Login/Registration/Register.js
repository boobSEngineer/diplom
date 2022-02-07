import React from "react";
import {useForm} from "react-hook-form";
import s from "./Register.module.css";

const Register = (props) => {
    const { register, handleSubmit } = useForm();
    const handleError = (errors) => {
    };
    const processForm  = (d) => {
        debugger
        props.register(d.login, d.username, d.password)
    }

    return (
        <div className={s.register_wrapper}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(processForm, handleError)}>
                <label>
                    <p>Login</p>
                    <input type="text" name="login" placeholder="login"
                           {...register('login')}/>
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" placeholder="username"
                           {...register('username')}/>
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

export default Register;

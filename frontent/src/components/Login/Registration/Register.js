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
        login: {required: "Логин не может быть пустым"},
        username: {required: "Имя пользователя не может быть пустым"},
        password: {required: "Пароль не может быть пустым"},
    };

    return (
        <div className={s.container}>
            <div className={s.box}>
                <h3>Регистрация</h3>
                <form onSubmit={handleSubmit(processForm, handleError)}>
                    <div className={s.login_wrapper}>
                        <p>Login</p>
                        <input type="text" name="login" placeholder="login"
                               {...register('login', registerOptions.login)}/>
                        <small className="text-danger">
                            {errors?.login && errors.login.message}
                        </small>
                    </div>
                    <div className={s.username_wrapper}>
                        <p>Username</p>
                        <input type="text" name="username" placeholder="username"
                               {...register('username', registerOptions.username)}/>
                        <small className="text-danger">
                            {errors?.username && errors.username.message}
                        </small>
                    </div>
                    <div className={s.password_wrapper}>
                        <p>Password</p>
                        <input type="password" name="password" placeholder="password"
                               {...register('password', registerOptions.password)}/>
                        <small className="text-danger">
                            {errors?.password && errors.password.message}
                        </small>
                    </div>
                    <div className={s.button}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;

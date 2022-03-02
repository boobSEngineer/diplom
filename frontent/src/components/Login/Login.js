import React from "react";
import s from "./Login.module.css";
import {useForm} from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleError = (errors) => {
    };

    const processForm = (d) => {
        props.logIn(d.login, d.password)
    }

    const registerOptions = {
        login: {required: "Логин не может быть пустым"},
        password: {required: "Пароль не может быть пустым"},
    };


    return (
        <div className={s.wrapper}>
            <div className={s.login_wrapper}>
                <div className={s.box}>
                    <h3>ВХОД</h3>
                    <form onSubmit={handleSubmit(processForm, handleError)}>
                        <div className={s.login}>
                            <input type="text" name="login" placeholder="Логин"
                                   {...register('login', registerOptions.login)}/>
                            <small>
                                {errors?.login && errors.login.message}
                            </small>
                        </div>
                        <div className={s.password}>
                            <input type="password" name="password" placeholder="Пароль"
                                   {...register('password', registerOptions.password)}/>
                            <small>
                                {errors?.password && errors.password.message}
                            </small>
                        </div>
                        <div className={s.button}>
                            <button type="submit">Войти</button>
                        </div>
                        <div className={s.message}>
                            <div>{props.status_message}</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

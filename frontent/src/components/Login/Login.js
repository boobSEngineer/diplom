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
        login: {required: "* Логин не может быть пустым."},
        password: {required: "* Пароль не может быть пустым."},
    };


    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <div className={s.box_block1}>
                    <div className={s.block1_header}>
                        <h2>Вход</h2>
                    </div>
                    <div className={s.block1_content}>
                        <p>Пожалуйста войдите в аккаунт на сайте Toy&Fonts.</p>
                        <form onSubmit={handleSubmit(processForm, handleError)}>
                            <div className={s.mid_input}>
                                <input type="text" name="login" placeholder="Логин"
                                       {...register('login', registerOptions.login)}/>
                                <small>
                                    {errors?.login && errors.login.message}
                                </small>
                            </div>
                            <div className={s.mid_input}>
                                <input type="password" name="password" placeholder="Пароль"
                                       {...register('password', registerOptions.password)}/>
                                <small>
                                    {errors?.password && errors.password.message}
                                </small>
                            </div>
                            <div className={s.submit}>
                                <button type="submit">Войти</button>
                            </div>
                        </form>
                    </div>
                    <div className={s.block1_footer}>
                        <p>{props.status_message}</p>
                    </div>
                </div>
                <div className={s.box_block2}>
                    <div className={s.block2_header}>
                        <h2>Регистрация</h2>
                    </div>
                    <div className={s.block2_content}>
                        <p>Регистрация позволит тебе творить, сделав свой шрифт.</p>
                    </div>
                    <div className={s.block2_footer}>
                        <a href="/registration">Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

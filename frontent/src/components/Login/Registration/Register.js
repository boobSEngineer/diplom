import React from "react";
import {useForm} from "react-hook-form";
import s from "../Login.module.css";
import g from "./Register.module.css"

const Register = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };
    const processForm = (d) => {
        props.register(d.login, d.username, d.password)
    };

    const registerOptions = {
        login: {required: "* Логин не может быть пустым."},
        username: {required: "* Имя пользователя не может быть пустым."},
        password: {required: "* Пароль не может быть пустым."},
    };

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <div className={g.box_block1}>
                    <div className={s.block1_header}>
                        <h2>Регистрация</h2>
                    </div>
                    <div className={s.block1_content}>
                        <form onSubmit={handleSubmit(processForm, handleError)}>
                            <div className={s.mid_input}>
                                <input type="text" name="login" placeholder="login"
                                       {...register('login', registerOptions.login)}/>
                                <small>
                                    {errors?.login && errors.login.message}
                                </small>
                            </div>
                            <div className={s.mid_input}>
                                <input type="text" name="username" placeholder="username"
                                       {...register('username', registerOptions.username)}/>
                                <small>
                                    {errors?.username && errors.username.message}
                                </small>
                            </div>
                            <div className={s.mid_input}>
                                <input type="password" name="password" placeholder="password"
                                       {...register('password', registerOptions.password)}/>
                                <small>
                                    {errors?.password && errors.password.message}
                                </small>
                            </div>
                            <div className={s.submit}>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className={s.block1_footer}>
                        <p>{props.status_message}</p>
                    </div>
                </div>
                <div className={g.box_block2}>

                </div>

            </div>
        </div>
    )
}

export default Register;

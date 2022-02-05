import React, {useState} from "react";
import s from "./Login.module.css";

const Login = (props) => {
    const [login, setLogin] = useState(props.login);
    const [password, setPassword] = useState(props.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.logIn(login, password)
    }

    return (
        <div className={s.login_wrapper}>
                <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    <p>Login</p>
                    <input type="text" placeholder="login" value={login} onChange={ e => {setLogin(e.target.value)}}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="password" value={password} onChange={ e => {setPassword(e.target.value)}}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;

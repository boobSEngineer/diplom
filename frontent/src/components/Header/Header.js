import React from "react";
import h from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header>
                <div className={h.wrapper}>
                    <div className={h.header_top}>
                        <div className={h.header_top_block1}>
                            <div className={h.logo}>
                                <p><a href="/">Диплом</a></p>
                            </div>
                            <div className={h.search}>
                                <input placeholder="Найти шрифт..." type="text"/>
                            </div>
                        </div>
                        <div className={h.header_top_block2}>
                            <ul className={h.nav}>
                                <li><a href="/fonts">Галерея</a></li>
                                <li><a href="">Создать новый шрифт</a></li>
                                {props.isAuth ?
                                    <>
                                        <li><a href="/profile">{props.login}</a></li>
                                        <button onClick={props.logOut}>Выход</button>
                                    </>
                                    :
                                        <li><a href="/login">Вход/Регистрация</a></li>
                                    }
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
            </header>
        </>

    )
};

export default Header;

import React from "react";
import h from "./Header.module.css";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form";


const Header = (props) => {
    const {register, handleSubmit} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };


    const processForm = (l) => {
        props.updateQuery({search: l.search_string}, "home");
    };

    return (
        <>
            <header>
                <div className={h.wrapper}>
                    <div className={h.header_top}>
                        <div className={h.header_top_block1}>
                            <div className={h.logo}>
                                <p><a href="/">Toy&Fonts</a></p>
                            </div>
                            <form className={h.search} onSubmit={handleSubmit(processForm, handleError)}>
                                <div className={h.search_input}>
                                    <input placeholder="Найти шрифт..." type="text" name="search_string"
                                           {...register('search_string',{onChange: (e) => {
                                               debugger
                                                   if (window.location.pathname === "/") {
                                                       props.updateQuery({search: e.target.value}, "home")
                                                   }
                                               }})}/>
                                </div>
                                <button type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </form>
                        </div>
                        <div className={h.header_top_block2}>
                            <ul className={h.nav}>
                                <li><a href="">Создать новый шрифт</a></li>
                                {props.isAuth ?
                                    <>
                                        <ul className={h.desktop_nav}>
                                            <li>
                                                <a href={`/profile/${props.myId}`}>{props.username}</a>
                                                <ul>
                                                    <li><a href="/panel_control">Панель управления</a></li>
                                                    {/*<li><a href="/profile_settings"> Детали профиля</a></li>*/}
                                                    <li><a href="/fonts_upload">Загрузить шрифт</a></li>
                                                    <li><a href="/my_fonts">Мои шрифты</a></li>
                                                    <li><a href="/liked">Понравилось</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className={h.logout}>
                                            <button onClick={props.logOut}>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                                            </button>
                                        </div>
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

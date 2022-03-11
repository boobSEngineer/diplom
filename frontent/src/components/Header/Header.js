import React from "react";
import h from "./Header.module.css";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = (props) => {

    return (
        <>
            <header>
                <div className={h.wrapper}>
                    <div className={h.header_top}>
                        <div className={h.header_top_block1}>
                            <div className={h.logo}>
                                <p><a href="/">Toy&Fonts</a></p>
                            </div>
                            <form className={h.search}>
                                <div className={h.search_input}>
                                    <input placeholder="Найти шрифт..." type="text"/>
                                </div>
                                <button>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </form>
                        </div>
                        <div className={h.header_top_block2}>
                            <ul className={h.nav}>
                                <li><a href="">Создать новый шрифт</a></li>
                                {props.isAuth ?
                                    <>
                                        <li><a href="/profile">{props.login}</a></li>
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

import React from "react";
import p from "../Profile.module.css";
import m from "./MyFonts.Module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import c from "../../Home/PanelControl.module.css";
import {NavLink} from "react-router-dom";

const MyFonts = (props) => {
    return (
        <>
            <div className={p.wrapper}>
                <div className={p.box}>
                    <div className={p.sidebar_block}>
                        <div className={p.sidebar}>
                            <div className={p.sidebar_block_title}>
                                Мой аккаунт
                            </div>
                            <div className={p.sidebar_nav}>
                                <ul>
                                    <li><NavLink to="/profile" className={p.sidebar_nav_link} activeClassName={p.active}>Панель управления</NavLink></li>
                                    <li><NavLink to="/profile_settings" className={p.sidebar_nav_link} activeClassName={p.active}>Детали профиля</NavLink></li>
                                    <li><NavLink to="/fonts_upload" className={p.sidebar_nav_link} activeClassName={p.active}>Загрузить шрифт</NavLink></li>
                                    <li><NavLink to="/my_fonts" className={p.sidebar_nav_link} activeClassName={p.active}>Мои шрифты</NavLink></li>
                                    <li><NavLink to="/liked" className={p.sidebar_nav_link} activeClassName={p.active}>Понравилось</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={p.content_block}>
                        <div className={m.content_box}>
                            <div className={m.settings_box}>
                                <div className={m.sort_fonts}>
                                    <select>
                                        <option value="All" selected="selected">Сортировать</option>
                                        <option value="">Тренд</option>
                                        <option value="">Самый популярный</option>
                                        <option value="">Новое</option>
                                        <option value="">Алфовит</option>
                                    </select>
                                </div>
                                <form className={c.sentence_font}>
                                    <div className={c.input_something}>
                                        <input placeholder="Поиск..."/>
                                    </div>
                                </form>
                            </div>
                            <div className={m.content_column}>
                                    {props.fonts.map(f =>
                                        <div className={m.content}>
                                            <div className={m.title_font}>
                                                <h3>{f.full_name}</h3>
                                                <span className={m.font_by}><FontAwesomeIcon
                                                    icon={faEye}/> {f.views}</span>
                                                <span className={m.font_by}><FontAwesomeIcon icon={faHeart}/> 000000</span>
                                            </div>
                                            <div className={m.font_link}>
                                                <a href={`http://localhost:4000/file/fonts/${f.path}`}>Скачать</a>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default MyFonts;

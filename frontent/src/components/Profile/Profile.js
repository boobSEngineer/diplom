import React from "react";
import FormContainer from "../Form/FormContainer";
import p from "./Profile.module.css"
import {NavLink} from "react-router-dom";

const Profile = (props) => {

    return (
        <>
            <div className={p.wrapper}>
                <div className={p.box}>
                    <div className={p.sidebar_block}>
                        <div className={p.sidebar}>
                            <div className={p.sidebar_block_title}>
                                Мой аккаунт
                            </div>
                            <div className={p.sidebar_nav} >
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
                        <div className={p.content}>

                            <p>Добро пожаловать, <strong>{props.username}</strong>.</p>
                            <p>В понели управления Вы можете загрузить новый шрифт, на ваш профиль, посмотреть список
                                ваших шрифтов. А так же наблюдать за шрифтами которые Вы лайкнули.</p>

                            <div className={p.panel_control}>
                                <div className={p.panel_control_block}>
                                    <a href="/profile">Панель управления</a>
                                </div>
                                <div className={p.panel_control_block}>
                                    <a href="/profile_settings">Детали профиля</a>
                                </div>
                                <div className={p.panel_control_block}>
                                    <a href="/fonts_upload">Загрузить шрифт</a>
                                </div>
                                <div className={p.panel_control_block}>
                                    <a href="/my_fonts">Мои шрифты</a>
                                </div>
                                <div className={p.panel_control_block}>
                                    <a href="/liked">Понравилось</a>
                                </div>
                                <div className={p.panel_control_block}>
                                    <div></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;

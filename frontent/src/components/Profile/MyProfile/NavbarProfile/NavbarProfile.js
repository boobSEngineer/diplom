import React from "react";
import p from "../MyProfile/Profile.module.css"
import {NavLink, Navigate} from "react-router-dom";

const NavbarProfile = (props) => {
    const navLinkStyle = ({ isActive }) => p.sidebar_nav_link + " " +(isActive ? p.active : "");
    return (
        <>
            <div className={p.sidebar_block}>
                <div className={p.sidebar}>
                    <div className={p.sidebar_block_title}>
                        Мой аккаунт
                    </div>
                    <div className={p.sidebar_nav}>
                        <ul>
                            <li><NavLink to="/panel_control" className={navLinkStyle} >Панель
                                управления</NavLink></li>
                            {/*<li><NavLink to="/profile_settings" className={p.sidebar_nav_link}*/}
                            {/*             activeClassName={p.active}>Детали профиля</NavLink></li>*/}
                            <li><NavLink to="/fonts_upload" className={navLinkStyle}>Загрузить
                                шрифт</NavLink></li>
                            <li><NavLink to="/my_fonts" className={navLinkStyle}>Мои
                                шрифты</NavLink></li>
                            <li><NavLink to="/liked" className={navLinkStyle}>Понравилось</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
};

export default NavbarProfile;

import React from "react";
import p from "../Profile.module.css";
import FormContainer from "../../Form/FormContainer";
import {NavLink} from "react-router-dom";

const UploadFonts = (props) => {
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
                        <div className={p.content}>
                            <FormContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default UploadFonts;

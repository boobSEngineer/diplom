import React from "react";
import p from "../Profile.module.css";
import FormContainer from "../../Form/FormContainer";

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
                                    <li><a href="/profile">Панель управления</a></li>
                                    <li><a href="/profile_settings">Детали профиля</a></li>
                                    <li><a href="/fonts_upload">Загрузить шрифт</a></li>
                                    <li><a href="/my_fonts">Мои шрифты</a></li>
                                    <li><a href="/liked">Понравилось</a></li>
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

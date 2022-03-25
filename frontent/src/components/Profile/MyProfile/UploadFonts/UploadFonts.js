import React from "react";
import p from "../MyProfile/Profile.module.css";
import FormContainer from "./Form/FormContainer";
import NavbarProfileContainer from "../NavbarProfile/NavbarProfileContainer";

const UploadFonts = (props) => {
    return (
        <>
            <div className={p.wrapper}>
                <div className={p.box}>

                    <NavbarProfileContainer/>

                    <div className={p.content_block}>
                        <div className={p.content}>
                            <p><strong>{props.username}</strong>, здесь Вы можете загрузить шрифт.</p>
                            <p>Все ваши шрифты можно посмотреть во вкладке {<a href="my_fonts"><strong>"Мои шрифты"</strong></a>}.</p>
                            <FormContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default UploadFonts;

import React from "react";
import f from "./FontPage.Module.css";

const Font = (props) => {
    return (
        <>
            <div className={f.wrapper}>
                <div className={f.box}>
                    <div className={f.prewie}>{props.font.full_name}</div>
                    <div className={f.nav}>
                        <div className={f.font_navigator}>
                            <a href="">Info</a>
                            <a href="">Tester Fonts</a>
                        </div>
                    </div>
                    <div className={f.block_info}>
                        <div className={f.block_info_title}>{props.font.full_name}</div>
                        <div className={f.block_info_autor}>Разработано {props.font.id_user}</div>
                        <div><p>Какая то информация.Какая то информация.Какая то информация.Какая то информация.</p></div>
                    </div>
                    <div className={f.block_tester_font}>
                        <div className={f.block_settings}>
                            <div>Изменить текст</div>
                            <div>Изменить размер</div>
                        </div>
                        <div>
                            font
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
};


export default Font;

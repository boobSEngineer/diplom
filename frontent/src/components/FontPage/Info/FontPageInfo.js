import React from "react";
import g from "../Info/FontInfoPage.Module.css";

const FontPageInfo = (props) => {
    return (
        props.font ? <>
            <div className={g.block_info}>
                <div className={g.block_info_title}>
                    <h2>{props.font.full_name}</h2>
                    <div className={g.block_info_autor}>
                        <p>Был загружен пользоателем <a href={`/profile/${props.font.id_user}`}>{props.font.username}</a></p>
                    </div>
                </div>
                <div className={g.block_text}>
                    {props.font.about? props.font.about: <p>Нет описания.</p>}
                </div>
            </div>
        </> : ""
    )
}

export default FontPageInfo;

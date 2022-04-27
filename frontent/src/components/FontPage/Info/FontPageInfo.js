import React from "react";
import f from "../FontPage.Module.css";
import FontPage from "../FontPage";

const FontPageInfo = (props) => {
    return (
        <>
            <div className={f.block_info}>
                <div className={f.block_info_title}>{props.font.full_name}
                    <p>id: {props.font.id_font}</p></div>
                <div className={f.block_info_autor}>Разработано {props.font.id_user}</div>
                <div><p>Какая то информация.Какая то информация.Какая то информация.Какая то информация.</p></div>
            </div>
        </>
    )
}

export default FontPageInfo;

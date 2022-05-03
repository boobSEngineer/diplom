import React from "react";
import g from "../Info/FontInfoPage.Module.css";

const FontPageInfo = (props) => {
    return (
        <>
            <div className={g.block_info}>
                <div className={g.block_info_title}>
                    <h2>{props.font.full_name}</h2>
                    <div className={g.block_info_autor}>
                        <p>Был загружен юзером с id: <a href={`/profile/${props.font.id_user}`}>{props.font.id_user}</a></p>
                    </div>
                </div>
                <div className={g.block_text}>
                    <p className={g.text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Ab dolor dolorum exercitationem iste numquam, provident quas soluta suscipit tempora velit! Consectetur explicabo laborum maiores neque officia perspiciatis sint voluptates voluptatum!</p>
                    <br/>
                    <p className={g.text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi deserunt distinctio, doloremque esse et fugit impedit ipsa modi porro provident quaerat, quasi, quo repellat repudiandae tempora totam voluptas voluptate.</p>
                    <br/>
                    <p className={g.text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Consectetur debitis doloremque, ducimus eveniet facilis fugiat fugit in incidunt molestiae nostrum, nulla provident quis ratione rem rerum soluta sunt tempore vel.</p>
                </div>
            </div>
        </>
    )
}

export default FontPageInfo;

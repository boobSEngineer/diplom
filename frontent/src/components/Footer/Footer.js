import React from "react";
import f from "./Footer.module.css"
import vk from "../common/accets/vk.png"
import youtube from "../common/accets/youtube.png"

const Footer = (props) => {
    return <>
        <footer>
            <div className={f.line}></div>
            <div className={f.wrapper}>
                <div className={f.box}>
                    <div className={f.wrapp_block1}>
                        <div className={f.wrapp_block1_header}>
                            <h2>Toy&Fonts</h2>
                        </div>
                        <div  className={f.wrapp_block1_content}>
                            <p>Toy&Fonts откртыая платформа для распростронения шрифтов. Здесь Вы можете найти шрифты на любой вкус и загрузить собственные. Все доступные шрифты доступны в использовании CSS.</p>
                            <br/>
                            <p>Загруженные шрифты могут быть защищены авторским правом. Администрация сайта не несёт отвественности за их распростроненние.</p>
                        </div>
                    </div>
                    <div className={f.wrapp_block2}>
                        <ul className={f.nav}>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""><img src={vk}/></a></li>
                            <li><a href=""><img src={youtube}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className={f.title}>
                    <p >Дипломный проект 2022</p>
                </div>
            </div>
        </footer>
    </>

}

export default Footer;

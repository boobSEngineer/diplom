import React from "react";
import f from "./Footer.module.css"

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
                            <p>Cайт о шрифтах, насчитывающий десятки категорий и тысячи шрифтов и начертаний.
                                Cайт о шрифтах, насчитывающий десятки категорий и тысячи шрифтов и начертаний.
                                Cайт о шрифтах, насчитывающий десятки категорий и тысячи шрифтов и начертаний.</p>
                        </div>
                    </div>
                    <div className={f.wrapp_block2}>
                        <ul className={f.nav}>
                            <li><a href="">Кнопка</a></li>
                            <li><a href="">Кнопка</a></li>
                            <li><a href="">Кнопка</a></li>
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

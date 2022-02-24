import React from "react";
import h from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header>
                <div className={h.wrapper}>
                    <div className={h.header_top}>
                        <div className={h.header_top_block1}>
                            <div className={h.logo}>
                                <p><a href="/">Диплом</a></p>
                            </div>
                            <div className={h.search}>
                                <input placeholder="Найти шрифт..." type="text"/>
                            </div>
                        </div>
                        <div className={h.header_top_block2}>
                            <ul className={h.nav}>
                                <li><a href="/fonts">Галерея</a></li>
                                <li><a href="">Создать новый шрифт</a></li>
                                <li><a href="">Не забыть вставить кнопку</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
            </header>
        </>

    )
};

export default Header;

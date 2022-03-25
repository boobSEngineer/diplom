import React from "react";
import p from "../MyProfile/Profile.module.css";
import m from "../MyFonts/MyFonts.Module.css";
import c from "../../../Home/PanelControl.module.css";
import NavbarProfileContainer from "../NavbarProfile/NavbarProfileContainer";

const Liked = (props) => {
    return (
        <>
            <div className={p.wrapper}>
                <div className={p.box}>
                    <NavbarProfileContainer/>
                    <div className={p.content_block}>
                        <div className={m.content_box}>
                            <div className={m.settings_box}>
                                <div className={m.sort_fonts}>
                                    <select>
                                        <option value="All" selected="selected">Сортировать</option>
                                        <option value="">Самый популярный</option>
                                        <option value="">Новое</option>
                                        <option value="">Алфовит</option>
                                    </select>
                                </div>
                                <form className={c.sentence_font}>
                                    <div className={c.input_something}>
                                        <input placeholder="Поиск..."/>
                                    </div>
                                </form>
                            </div>
                            <div className={m.content_column}>
                                вытаскивать из баззы понраившиеся
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default Liked;

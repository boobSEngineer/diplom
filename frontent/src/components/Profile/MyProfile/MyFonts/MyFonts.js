import React from "react";
import p from "../MyProfile/Profile.module.css";
import m from "./MyFonts.Module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";
import c from "../../../Home/PanelControl.module.css";
import NavbarProfileContainer from "../NavbarProfile/NavbarProfileContainer";

const MyFonts = (props) => {
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
                                {props.fonts.map(f =>
                                    <div className={m.content}>
                                        <div className={m.title_font}>
                                            <h3>{f.full_name}</h3>
                                            <span className={m.font_by}><FontAwesomeIcon
                                                icon={faEye}/> {f.views}</span>
                                            <span className={m.font_by}><FontAwesomeIcon icon={faHeart}/> 000000</span>
                                        </div>
                                        <div className={m.font_link}>
                                            <a onClick={() => {props.deleteFontById(f.id_font, props.id_user)}}><FontAwesomeIcon icon={faXmark}/></a>
                                            <a href={`http://localhost:4000/file/fonts/${f.path}`}>Скачать</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default MyFonts;

import React from "react";
import p from "../MyProfile/Profile.module.css";
import m from "./MyFonts.Module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";
import c from "../../../Home/PanelControl.module.css";
import NavbarProfileContainer from "../NavbarProfile/NavbarProfileContainer";
import l from "../Liked/Liked.Module.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const MyFonts = (props) => {
    const {register, handleSubmit} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };


    const processForm = (l) => {
        props.updateQuery({search: l.search_string}, "uploaded");
    };

    function switchSort(variant) {
        switch (variant) {
            case "All":
                return props.updateQuery({sort: "/liked"}, "uploaded");
            case "1":
                return props.updateQuery({sort: "views"}, "uploaded");
            case "2":
                return props.updateQuery({sort: "likes"}, "uploaded");
            case "3":
                return props.updateQuery({sort: "data"}, "uploaded");
            default:
                return "";
        }
    }

    let navigate = useNavigate();
    let linkForFont = (id) => {
        navigate(`/font/${id}`)
    }
    return (
        <>
            <div className={p.wrapper}>
                <div className={p.box}>

                    <NavbarProfileContainer/>

                    <div className={p.content_block}>
                        <div className={m.content_box}>
                            <div className={m.settings_box}>
                                <div className={m.sort_fonts}>
                                    <select onChange={(e) => {
                                        switchSort(e.target.value)
                                    }}>
                                        <option value="All" selected="selected">Сортировать</option>
                                        <option value="1">Тренд</option>
                                        <option value="2">Самый популярный</option>
                                        <option value="3">Новое</option>
                                    </select>
                                </div>
                                <form className={c.sentence_font} onSubmit={handleSubmit(processForm, handleError)}>
                                    <div className={c.input_something}>
                                        <input placeholder="Найти шрифт..." type="text" name="search_string"
                                               {...register('search_string',{onChange: (e) => {
                                                       if (window.location.pathname.indexOf("my_fonts") !== -1) {
                                                           props.updateQuery({search: e.target.value}, "uploaded")
                                                       }
                                                   }})}/>
                                    </div>
                                </form>
                            </div>
                            <div className={m.content_column}>
                                {
                                    props.fonts.length > 0 ?
                                        <>
                                            {props.fonts.map(f =>
                                                <div className={m.content}>
                                                    <div className={m.title_font}>
                                                        <div className={m.title1} onClick={() => {
                                                            linkForFont(f.id_font)
                                                        }}>
                                                            <h3>{f.full_name}</h3>
                                                        </div>
                                                        <div className={m.title2}>
                                                            <span className={m.font_by}><FontAwesomeIcon
                                                                icon={faEye}/> {f.views}</span>
                                                            <span className={m.font_by}><FontAwesomeIcon
                                                                icon={faHeart}/> {f.like_counter}</span>

                                                        </div>
                                                    </div>
                                                    <div className={m.font_link}>
                                                        <a onClick={() => {
                                                            props.deleteFontById(f.id_font, props.id_user)
                                                        }}><FontAwesomeIcon icon={faXmark}/></a>
                                                        <a href={`http://localhost:4000/file/fonts/${f.path}`}>Скачать</a>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                        : <div className={l.box_panel_null}>
                                            <p>Вы еще ничего не загрузили</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default MyFonts;

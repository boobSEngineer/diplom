import React from "react";
import p from "../MyProfile/Profile.module.css";
import m from "../MyFonts/MyFonts.Module.css";
import c from "../../../Home/PanelControl.module.css";
import l from "../../../Profile/MyProfile/Liked/Liked.Module.css";
import NavbarProfileContainer from "../NavbarProfile/NavbarProfileContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Liked = (props) => {
    const {register, handleSubmit} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };

    const likeFont = (id_font) => {
        props.likeFont(id_font);
    }
    const processForm = (l) => {
        props.updateQuery({search: l.search_string},"liked");
    };

    function switchSort(variant) {
        switch (variant) {
            case "All":
                return props.updateQuery({sort: "/liked"}, "liked");
            case "1":
                return props.updateQuery({sort: "views"}, "liked");
            case "2":
                return props.updateQuery({sort: "likes"}, "liked");
            case "3":
                return props.updateQuery({sort: "data"}, "liked");
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
                                                       if (window.location.pathname === "/") {
                                                           props.updateQuery({search: e.target.value})
                                                       }
                                                   }})}/>
                                    </div>
                                </form>
                            </div>
                            <div className={m.content_column}>
                                {
                                    props.fonts.length > 0?
                                    <>
                                        {
                                            props.fonts.map(f =>
                                                <div className={m.content}>
                                                    <div className={m.title_font}>

                                                        <div className={m.title1} onClick={() => {
                                                            linkForFont(f.id_font)
                                                        }}>
                                                            <h3>{f.full_name}</h3>
                                                        </div>
                                                        <div className={m.title2}>
                                                            <p className={m.font_by}><FontAwesomeIcon icon={faEye}/> {f.views}</p>
                                                            <p className={f.is_liked?l.font_liked_by:m.font_by} onClick={() => {
                                                                likeFont(f.id_font)}}><FontAwesomeIcon icon={faHeart}/> {f.like_counter}</p>
                                                        </div>

                                                    </div>
                                                    <div className={l.font_liked_link} >
                                                        <a href={`http://localhost:4000/file/fonts/${f.path}`}>Скачать</a>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                        : <div className={l.box_panel_null}>
                                            <p>Вы еще ничего не лайкнули</p>
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


export default Liked;

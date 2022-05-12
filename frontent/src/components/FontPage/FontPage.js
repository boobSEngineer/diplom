import React, {useEffect, useState} from "react";
import f from "./FontPage.Module.css";
import {faChevronLeft, faEye, faFaceSadTear, faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink, useNavigate} from "react-router-dom";
import {fontRegistry} from "../../fontRegistry";
import b from "../Home/Content.module.css";
import {Loading} from "../common/load/load";

const Font = (props) => {
    const [auth, setAuth] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isCopy, setCopy] = useState(false)

    const сloseAll = () => {
        setIsOpen(false);
        setTimeout(() => setCopy(false), 1000);
    }
    const copyText = (text) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            setCopy(true);
            return navigator.clipboard.writeText(text);
        }
    }

    const likeFont = (id_font) => {
        props.likeCurrentFont(id_font);

    }

    useEffect(() => {
        setAuth((auth) => {
            if (props.isAuth === true) {
                return auth = true;
            } else {
                return auth = false
            }
        })
    }, [props.isAuth]);

    return (
        <>
            {props.font ?
                <>
                    <div className={f.wrapper}>
                        <div className={f.box}>
                            <div className={f.prewie}>
                                <div className={f.boxing}>
                                    <div className={f.title_navigation1}>
                                        <span className={f.grid_views}><FontAwesomeIcon icon={faEye}/>{props.font.views}</span>
                                        <span className={auth ? f.grid_likes : f.grid_likes_not_auth}>
                                    <span className={props.font.is_liked ? f.liked : f.unliked}
                                          onClick={() => {
                                              likeFont(props.font.id_font)
                                          }}>
                                    <FontAwesomeIcon icon={faHeart}/> {props.font.like_counter}
                                </span>
                                </span>
                                    </div>
                                    <div className={f.change_page}>
                                        {props.font.before_id ?
                                            <NavLink to={`/font/${props.font.before_id}`}><FontAwesomeIcon
                                                icon={faChevronLeft}/></NavLink> :
                                            <span className={f.non_button}></span>}
                                        <div className={f.title}>
                                            <p style={{'font-family': fontRegistry(props.font.path)}}>{props.font.full_name}</p>
                                        </div>
                                        {props.font.after_id ?
                                            <NavLink to={`/font/${props.font.after_id}`}><FontAwesomeIcon
                                                icon={faChevronRight}/></NavLink> :
                                            <span className={f.non_button}></span>}
                                    </div>
                                    <div className={f.title_navigation1}>
                                        <button className={f.button_share} onClick={() => {
                                            setIsOpen(true)
                                        }}>
                                            <a className={f.share}><FontAwesomeIcon icon={faArrowUpFromBracket}/>Поделиться</a>
                                        </button>
                                        <span><FontAwesomeIcon icon={faCircleArrowDown}/><a href={`http://localhost:4000/file/fonts/${props.font.path}`}> Скачать</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={f.nav}>
                                <div className={f.font_navigator}>
                                    <NavLink to={`/font/${props.font.id_font}`}>Общая информация</NavLink>
                                    <NavLink to={`/font_tester/${props.font.id_font}`}>Протестировать</NavLink>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={f.popup + (isOpen ? " " + f.open : "")}>
                        <div className={f.popup_body}>
                            <div className={f.popup_content}>
                                <a className={f.popup_close} onClick={() => {
                                    сloseAll()
                                }}><FontAwesomeIcon icon={faXmark}/></a>
                                <div className={f.popup_title}>Поделиться</div>
                                <div className={f.popup_text}>
                                    <p>Этой ссылкой можно воспользоваться и отправить своему знакомому!</p>
                                    <br/>
                                    <div className={f.popup_text_with_url}>
                                        <input className={f.input_url} value={window.location.href} readOnly/>
                                        <button className={f.copy} onClick={() => {
                                            copyText(window.location.href)
                                        }}>{isCopy ? "Cкопировано!" : "Скопировать"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : <div className={b.wrapper_null}>
                    <div className={b.box_null}>
                        <Loading/>
                    </div>
                </div>}

        </>

    )
};


export default Font;

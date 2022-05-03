import React, {useEffect, useState} from "react";
import f from "./FontPage.Module.css";
import {faChevronLeft, faEye, faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FontPageInfo from "./Info/FontPageInfo";
import {NavLink, useNavigate} from "react-router-dom";

const Font = (props) => {
    const [auth, setAuth] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isCopy, setCopy] = useState(false)

    const сloseAll = () => {
        setIsOpen(false);
        setTimeout(() => setCopy(false), 1000);
    }
    const copyText = (text) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText){
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
                                <NavLink to={`/font/${props.font.id_font - 1}`}><FontAwesomeIcon icon={faChevronLeft}/></NavLink>
                                <div className={f.title}>
                                    <p>{props.font.full_name}</p>
                                </div>
                                <NavLink to={`/font/${props.font.id_font + 1}`}><FontAwesomeIcon icon={faChevronRight}/></NavLink>
                            </div>
                            <div className={f.title_navigation1}>
                                <button className={f.button_share} onClick={() => {
                                    setIsOpen(true)
                                }}>
                                    <a className={f.share}><FontAwesomeIcon icon={faArrowUpFromBracket}/>Поделиться</a>
                                </button>
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
                                    <button className={f.copy} onClick={()=>{copyText(window.location.href)}}>{isCopy?"Cкопировано!":"Скопировать"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>

    )
};


export default Font;

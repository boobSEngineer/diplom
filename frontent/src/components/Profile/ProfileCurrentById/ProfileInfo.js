import React, {useEffect, useRef, useState} from "react";
import p from "./ProfileInfo.module.css";
import {faAlignJustify, faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faFrog} from "@fortawesome/free-solid-svg-icons";
import {faGhost} from "@fortawesome/free-solid-svg-icons";
import {faCat} from "@fortawesome/free-solid-svg-icons";
import {faPoo} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import c from "../../Home/PanelControl.module.css";
import b from "../../Home/Content.module.css";
import {useNavigate} from "react-router-dom";


const ProfileInfo = (props) => {
    const [auth, setAuth] = useState(false);

    const likeFont = (id_font) => {
        props.likeFont(id_font);
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

    function getSvg(number) {
        switch (number) {
            case 0:
                return <><FontAwesomeIcon icon={faPoo}/></>
            case 1:
                return <><FontAwesomeIcon icon={faFrog}/></>
            case 2:
                return <><FontAwesomeIcon icon={faGhost}/></>;
            case 3:
                return <><FontAwesomeIcon icon={faCat}/></>;
            default:
                return "";
        }
    }

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    let navigate = useNavigate();
    let linkForFont = (id) => {
        navigate(`/font/${id}`)
    }



    return (
        <>
            <div className={p.wrapper_card}>
                <div className={p.box}>
                    {
                        props.my_id === props.id_user ?
                            <>
                                <div className={p.settings}>
                                    <a href="/panel_control"><FontAwesomeIcon icon={faAlignJustify}/></a>
                                </div>
                            </> :
                            ""
                    }
                    <div className={p.img}>{getSvg(parseInt(props.id_user) % 4)}</div>
                    <div className={p.content}>
                        <div className={p.content_top}>
                            <p className={p.name}>{props.usernameById}</p>
                            <p className={p.id}>(id: {props.id_user})</p>
                        </div>
                        <div className={p.content_mid}>
                            <p>Шрифтов: {props.fontsByid.length}</p>
                        </div>

                    </div>
                    <hr className={p.hr}/>
                    {
                        props.fontsByid.length > 0 ?
                            <div className={p.show_more}>
                                <a onClick={executeScroll}>Просмотреть шрифты </a><FontAwesomeIcon onClick={executeScroll} icon={faAngleDown}/>
                            </div>
                            :
                            <div className={p.show_more}>
                                <p>Шрифтов пока нет</p>
                            </div>

                    }
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div ref={myRef} className={c.wrapper}>
                <div className={b.content}>
                    <div className={b.grid_square}>
                        {
                            props.fontsByid.map(f =>
                                <>
                                    <div className={b.card_square}>
                                        <div className={b.box } onClick={() => {
                                            linkForFont(f.id_font)
                                        }}>
                                            <div className={b.box_top}>
                                                <p className={b.grid_title}>{f.full_name}</p>
                                                <p className={b.grid_title_made}>Сделано</p>
                                            </div>
                                            <div className={b.box_content}>
                                                ddddd
                                            </div>
                                        </div>
                                        <div className={b.box_bottom}>
                                            <div className={b.box_bottom_block1}></div>
                                            <div className={b.box_bottom_block2}>
                                                <span className={b.grid_views}><FontAwesomeIcon
                                                    icon={faEye}/> {f.views}
                                                </span>
                                                <span  className={auth? b.grid_likes: b.grid_likes_not_auth}>
                                                    <span className={f.is_liked? b.liked: b.unliked}
                                                          onClick={() => {
                                                              likeFont(f.id_font)}}>
                                                    <FontAwesomeIcon icon={faHeart} /> {f.like_counter}
                                                </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileInfo;

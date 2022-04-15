import React, {useEffect, useState} from "react";
import c from "./PanelControl.module.css";
import b from "./Content.module.css";
import {faArrowRotateRight} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const Home = (props) => {
    const [isShrunk, setShrunk] = useState(false);
    const [style, setStyle] = useState(false);
    const [like, setLike] = useState(false);

    useEffect(() => {
        setLike((like) => {
            if (props.isAuth === true) {
                return like = true;
            } else {
                return like = false
            }
        })
    }, [props.isAuth]);


    useEffect(() => {
        const handler = () => {
            setShrunk((isShrunk) => {
                if (
                    !isShrunk &&
                    (document.body.scrollTop > 20 ||
                        document.documentElement.scrollTop > 20)
                ) {
                    return true;
                }

                if (
                    isShrunk &&
                    document.body.scrollTop < 4 &&
                    document.documentElement.scrollTop < 4
                ) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const navigate = useNavigate();

    function switchSort(variant) {
        switch (variant) {
            case "All":
                return navigate("/");
            case "1":
                return navigate("/?sort=views");
            case "2":
                return navigate("/?sort=likes");
            case "3":
                return navigate("/?sort=data");
            default:
                return "";
        }
    }

    return (
        <>
            <div className={c.wrapper_panel + " " + c.sticky_wrapper + (isShrunk ? " " + c.sticky_wrapper_effect : "")}>
                <div className={c.control_setting}>
                    <div className={c.container}>
                        <div className={c.sort_fonts}>
                            <select onChange={(e)=>{switchSort(e.target.value)}}>
                                <option value="All" selected="selected">Сортировать</option>
                                <option value="1">Тренд</option>
                                <option value="2">Самый популярный</option>
                                <option value="3">Новое</option>
                            </select>
                        </div>
                    </div>
                    <div className={c.container}>
                        <form className={c.sentence_font}>
                            <div className={c.input_something}>
                                <input placeholder="Введите что-нибудь"/>
                            </div>
                        </form>
                    </div>
                    <div className={c.container}>
                        <div className={c.range_font}>
                            <div className={c.font_px}>
                                <select>
                                    <option value="All" selected="selected">0px</option>
                                    <option value="10px">5px</option>
                                    <option value="20px">20px</option>
                                    <option value="30px">30px</option>
                                    <option value="40px">40px</option>
                                </select>
                            </div>
                            <input className={c.range} type="range"/>
                            <div className={c.button_circle_padding_1}>
                                <div className={c.button_circle}>
                                    <button className={c.imge} type="reset">
                                        <FontAwesomeIcon icon={faArrowRotateRight}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={c.container}>
                        <div className={c.initial_base}>
                            <div className={c.button_circle_padding_2}>
                                <div className={c.button_circle} onClick={() => {
                                    setStyle(true)
                                }}>
                                    <button className={style ? c.imge_count : c.imge}>
                                        <FontAwesomeIcon icon={faBars}/>
                                    </button>
                                </div>
                            </div>
                            <div className={c.button_circle_padding_2}>
                                <div className={c.button_circle} onClick={() => {
                                    setStyle(false)
                                }}>
                                    <button className={style ? c.imge : c.imge_count}>
                                        <FontAwesomeIcon icon={faTableCellsLarge}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className={c.sort_language}>*/}
                    {/*    <select>*/}
                    {/*        <option value="All" selected="selected"> Язык</option>*/}
                    {/*        <option value="">Русский</option>*/}
                    {/*        <option value="">Английский</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className={c.wrapper}>
                <div className={b.content}>
                    <div className={style ? b.grid_row : b.grid_square}>
                        {
                            props.fonts.map(f =>
                                <>
                                    <div className={style ? b.card_row : b.card_square}>
                                        <div className={b.box}>
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
                                                        icon={faEye}/> {f.views}</span>
                                                <span className={like ? b.grid_likes : b.grid_likes_not_auth}><FontAwesomeIcon icon={faHeart}/> 000000</span>
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

export default Home;

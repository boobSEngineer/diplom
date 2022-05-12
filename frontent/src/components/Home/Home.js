import React, {useEffect, useState} from "react";
import c from "./PanelControl.module.css";
import b from "./Content.module.css";
import {faArrowRotateRight} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faFaceSadTear} from "@fortawesome/free-solid-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {fontRegistry} from "../../fontRegistry";
import {useForm} from "react-hook-form";

const Home = (props) => {
    const [isShrunk, setShrunk] = useState(false);
    const [style, setStyle] = useState(false);
    const [value, setValueFont] = useState(null);
    const [auth, setAuth] = useState(false);
    const [size, setSize] = useState(40);

    const {register, handleSubmit} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };


    const processForm = (l) => {
        setValueFont(l.value_string)
    };

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

    function switchSort(variant) {
        switch (variant) {
            case "All":
                return props.updateQuery({sort: "/"}, "home");
            case "1":
                return props.updateQuery({sort: "views"}, "home");
            case "2":
                return props.updateQuery({sort: "likes"}, "home");
            case "3":
                return props.updateQuery({sort: "data"}, "home");
            default:
                return "";
        }
    }

    let resetButton = () => {
        document.getElementById("result").value = 50
        setSize(parseInt(50));
    }

    let navigate = useNavigate();
    let linkForFont = (id) => {
        navigate(`/font/${id}`)
        window.scrollTo({top: 0, behavior: "instant"});
    }
    let arrowUp = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <>
            <div className={c.wrapper_panel + " " + c.sticky_wrapper + (isShrunk ? " " + c.sticky_wrapper_effect : "")}>
                <div className={c.control_setting}>
                    <div className={c.container}>
                        <div className={c.sort_fonts}>
                            <select onChange={(e) => {
                                switchSort(e.target.value)
                            }}>
                                <option value="All" selected="selected">Сортировать</option>
                                <option value="1">Тренд</option>
                                <option value="2">Самый популярный</option>
                                <option value="3">Новое</option>
                            </select>
                        </div>
                    </div>
                    <form className={c.sentence_font} onSubmit={handleSubmit(processForm, handleError)}>
                        <div className={c.input_something}>
                            <input placeholder="Введите что-нибудь" type="text" name="value_string"
                                   {...register('value_string', {
                                       onChange: (e) => {
                                           {
                                               setValueFont(e.target.value)
                                           }
                                       }
                                   })}/>
                        </div>
                    </form>
                    <div className={c.container}>
                        <div className={c.range_font}>
                            <div className={c.font_px}>
                                <select value="arbitrary" onChange={
                                    (e)=>{
                                        setSize(parseInt(e.target.value))}
                                }>
                                    <option value="arbitrary" hidden>{size}px</option>
                                    <option value="50" selected="selected">50px</option>
                                    <option value="16">16px</option>
                                    <option value="32">32px</option>
                                    <option value="94">94px</option>
                                    <option value="196">188px</option>
                                </select>
                            </div>
                            <input id="result" className={c.range} type="range" name="range" min="10" max="270"
                                   {...register('range', {
                                       onChange: (e) => {
                                           {
                                               setSize(parseInt(e.target.value))
                                           }
                                       }
                                   })}/>
                            <div className={c.button_circle_padding_1}>
                                <div className={c.button_circle}>
                                    <button className={c.imge} type="reset" onClick={()=>{resetButton()}}>
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
                </div>
            </div>

            <div className={c.wrapper}>
                <div className={b.content}>
                    {
                        props.fonts.length > 0 ?
                            <>
                            <div className={style ? b.grid_row : b.grid_square}>
                                {props.fonts.map(f =>
                                    <div className={style ? b.card_row : b.card_square}>
                                        <div className={b.box} onClick={() => {
                                            linkForFont(f.id_font)
                                        }}>
                                            <div className={b.box_top}>
                                                <p className={b.grid_title}>{f.full_name}</p>
                                                <p className={b.grid_title_made}>Загружено {f.username}</p>
                                            </div>
                                            <div className={b.box_content}>
                                                <p style={{'font-family': fontRegistry(f.path), 'font-size': size}}>
                                                    {value? value:"Hello world!"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={b.box_bottom}>
                                            <div className={b.box_bottom_block1}></div>
                                            <div className={b.box_bottom_block2}>
                                                <span className={b.grid_views}><FontAwesomeIcon
                                                    icon={faEye}/> {f.views}
                                                </span>
                                                <span className={auth ? b.grid_likes : b.grid_likes_not_auth}>
                                                    <span className={f.is_liked ? b.liked : b.unliked}
                                                          onClick={() => {
                                                              likeFont(f.id_font)
                                                          }}>
                                                    <FontAwesomeIcon icon={faHeart}/> {f.like_counter}
                                                </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </>

                            : <div className={b.wrapper_null}>
                                <div className={b.box_null}>
                                    <p>К сожелению ничего не нашлось <FontAwesomeIcon
                                        icon={faFaceSadTear}/></p>
                                </div>
                            </div>
                    }
                </div>
            </div>

            <div className={b.button_arrow_up_circle + " " + b.button_arrow_up_sticky_wrapper + (!isShrunk ? " " + b.button_arrow_up_circle_hidden : "")}>
                <div className={b.button_arrow_up} onClick={()=> {arrowUp()}}>
                    <FontAwesomeIcon icon={faArrowUp}/>
                </div>
            </div>

        </>
    )
}
export default Home;


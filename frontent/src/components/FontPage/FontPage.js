import React from "react";
import f from "./FontPage.Module.css";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FontPageInfo from "./Info/FontPageInfo";
import {NavLink, useNavigate} from "react-router-dom";

const Font = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={f.wrapper}>
                <div className={f.box}>
                    <div className={f.prewie}>
                        <div className={f.boxing}>
                            <div className={f.title_navigation1}>
                                <a>лайки</a>
                                <a>лайки</a>
                            </div>
                            <div className={f.change_page}>
                                <NavLink to={`/font/${props.font.id_font - 1}`}><FontAwesomeIcon icon={faChevronLeft}/></NavLink>
                                <div className={f.title}>
                                    <p>{props.font.full_name}</p>
                                </div>
                                <NavLink to={`/font/${props.font.id_font + 1}`}><FontAwesomeIcon icon={faChevronRight}/></NavLink>
                            </div>
                            <div className={f.title_navigation2}>
                                <a>лайки</a>
                                <a>лайки</a>
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

        </>

    )
};


export default Font;

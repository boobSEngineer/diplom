import React from "react";
import c from "../Home/PanelControl.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRotateRight, faBars, faTableCellsLarge} from "@fortawesome/free-solid-svg-icons";

const Font = (props) => {
    return (
        <>
            <div>
                Все шрифты:
            </div>
            {
                props.fonts.map(f => <div> {f.full_name} </div>)
            }
        </>

    )
};


export default Font;

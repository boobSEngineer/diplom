import React, {useState} from "react";
import t from './FontTester.Module.css';
import c from "../../Home/PanelControl.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRotateRight} from "@fortawesome/free-solid-svg-icons";
import {faPalette} from "@fortawesome/free-solid-svg-icons";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import {faAlignRight} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {fontRegistry} from "../../../fontRegistry";

const FontTester = (props) => {
    const [sizeFont, setSizeFont] = useState(40);
    const [sizeLetterSpacing, setSizeLetterSpacing] = useState(0);
    const [sizeLineSpacing, setSizeLineSpacing] = useState(100);
    const [value, setValueFont] = useState(null);
    const [color, setColor] = useState('#000000');
    const [weight, setWeight] = useState(100);
    const [textPosition, setTextPosition] = useState('left');

    let resetButton = () => {
        document.getElementById("result").value = '';
        setSizeFont(parseInt("40"));
        setSizeLetterSpacing(parseFloat("0"));
        setSizeLineSpacing(parseInt("100"));
        setColor('#000000');
        setTextPosition('left');
        setWeight(100);
    }

    const {register, handleSubmit} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };

    const processForm = (l) => {
        setValueFont(l.value_string)
    };

    if(!props.current_font) return <></>

    return (
        <>
            <div className={t.wrapper}>
                {/*<div className={t.title}>*/}
                {/*    <h2>Протестировать</h2>*/}
                {/*</div>*/}
                <p>
                    Здесь можно настроить параметры шрифта, посмотреть результат и скопировать готовый CSS для импорта и использования.
                </p><br/>

                <div className={t.box_tester}>
                    <div className={t.container}>
                        <div className={t.container_in}>
                            <p>Размер</p>
                            <p>{sizeFont}px</p>
                        </div>
                        <input id="result" className={t.range} type="range" min="10" max="270" onChange={(e) => {
                            setSizeFont(parseInt(e.target.value))
                        }}/>
                    </div>
                    <div className={t.container}>
                        <div className={t.container_in}>
                            <p>Расстояние между буквами</p>
                            <p>{sizeLetterSpacing}em</p>
                        </div>
                        <input id="result" className={t.range} type="range" min="-0.3" step="0.1" max="1"
                               onChange={(e) => {
                                   setSizeLetterSpacing(parseFloat(e.target.value))
                               }}/>
                    </div>
                    <div className={t.container}>
                        <div className={t.container_in}>
                            <p>Межстрочное расстояние</p>
                            <p>{sizeLineSpacing}%</p>
                        </div>
                        <input id="result" className={t.range} type="range" min="1" step="1" max="200"
                               onChange={(e) => {
                                   setSizeLineSpacing(parseInt(e.target.value))
                               }}/>
                    </div>
                    <div className={t.container}>
                        <div className={t.container_in}>
                            <p>Жирность шрифта</p>
                            <p>{weight}</p>
                        </div>
                        <input id="result" className={t.range} type="range" min="100" step="100" max="900"
                               onChange={(e) => {
                                   setWeight(parseInt(e.target.value))
                               }}/>
                    </div>
                    <div className={t.container}>
                        <form className={t.sentence_font} onSubmit={handleSubmit(processForm, handleError)}>
                            <input placeholder="Введите что-нибудь" type="text" name="value_string"
                                   {...register('value_string', {
                                       onChange: (e) => {
                                           {
                                               setValueFont(e.target.value)
                                           }
                                       }
                                   })}/>
                        </form>
                    </div>
                    <div className={t.container}>
                        <div className={t.container1}>
                            <div className={t.circle}>
                                <div className={textPosition === 'left'?t.color_active:t.color}  onClick={()=>{setTextPosition('left')}}>
                                    <FontAwesomeIcon icon={faAlignLeft}/>
                                </div>
                            </div>
                            <div className={t.circle}>
                                <div className={textPosition === 'center'?t.color_active:t.color} onClick={()=>{setTextPosition('center')}}>
                                    <FontAwesomeIcon icon={faAlignCenter}/>
                                </div>
                            </div>
                            <div className={t.circle}>
                                <div className={textPosition === 'right'?t.color_active:t.color} onClick={()=>{setTextPosition('right')}}>
                                    <FontAwesomeIcon icon={faAlignRight}/>
                                </div>
                            </div>
                            <div className={t.crug}>
                                    <input id="result" type="color" value={color} onChange={(e)=> {debugger; setColor(e.target.value)}}/>
                            </div>
                            <div className={t.circle}>
                                <button className={t.color} type="reset" onClick={() => {
                                    resetButton()
                                }}>
                                    <FontAwesomeIcon icon={faArrowRotateRight}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className={t.screen}>
                        <div className={t.box_screen} >
                            <p style={{'font-family': fontRegistry(props.current_font.path),
                                'font-size': sizeFont,
                                'letter-spacing': sizeLetterSpacing + "em",
                                'line-height': sizeLineSpacing + "%",
                                'text-align': textPosition,
                                'font-weight': weight + "",
                                'color': color,
                            }}>{(value ? value : "Hello world!") + '\u00A0'}</p>
                        </div>
                    </div>

                    <p className={t.title_mini}>Import</p>
                    <textarea className={t.window} rows="4" value={
`@font-face {
    font-family: "${props.current_font.full_name.replace(/[^\w]/g, '-').toLowerCase()}";
    src: url("http://localhost:4000/file/fonts/${props.current_font.path}") format('truetype'); 
}`
                    }/>
                    <br/> <br/>
                    <p className={t.title_mini}>Style</p>
                    <textarea className={t.window} rows="7" value={
`font-family: "${props.current_font.full_name.replace(/[^\w]/g, '-').toLowerCase()}"; 
font-size: ${sizeFont}px;
letter-spacing: ${sizeLetterSpacing}em;
line-height: ${sizeLineSpacing}%;
text-align: ${textPosition};
font-weight: ${weight};
color: ${color};`
                   }/>
            </div>

        </>
    )
}

export default FontTester;

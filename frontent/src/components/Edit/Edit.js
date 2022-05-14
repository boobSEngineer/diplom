import React, {useEffect, useState} from 'react';
import '../../App.css';
import e from './Edit.module.css';
import Designer, {Path, Preview} from 'react-designer';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import svg2ttf from "svg2ttf";

const buildSvgFont = (glyphs, name="test") => {
    // noinspection HttpUrlsUsage
    const header = `<?xml version="1.0" standalone="no"?>\n`
        + `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n`
        + `<svg xmlns="http://www.w3.org/2000/svg">\n`
        + `\t<metadata></metadata>\n\t<defs>\n`
        + `\t\t<font id="${name}" horiz-adv-x="500">\n`
        + `\t\t<font-face units-per-em="500" ascent="400" descent="-100"/>`;

    const norm = x => Math.round(x * 10) / 10;

    const body = glyphs.map(glyph => {
        let path = [];
        for (const o of glyph.data) {
            const transform = (x1, y1) => {
                // const {x, y, rotate} = o;
                // const r = rotate / 180 * Math.PI;
                return [
                    norm(x1 + o.x - o.moveX), // norm(x1 * Math.cos(r) - y1 * Math.sin(r) + x),
                    500 - norm(y1 + o.y - o.moveY), // norm(x1 * Math.sin(r) + y1 * Math.cos(r) + y),
                ];
            };
            if (o.type === "path") {
                const [moveX, moveY] = transform(o.moveX, o.moveY);
                path.push(`M ${moveX} ${moveY}`);
                o.path.forEach(({x1, y1, x2, y2, x, y}, i) => {
                    [x1, y1] = transform(x1, y1);
                    [x2, y2] = transform(x2, y2);
                    [x, y] = transform(x, y);
                    path.push(`C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`);
                });
                if (o.closed) {
                    path.push('Z');
                }
            }
        }
        // return `\t<path d="${path.join(" ")}"/>`
        return `\t\t\t<glyph unicode="${glyph.symbol}" horiz-adv-x="500" d="${path.join(" ")}"/>`
    }).join("\n");

    const ending = "\t\t</font>\n\t</defs>\n</svg>";
    // const ending = "</svg>";

    return [header, body, ending].join("\n");
}

const saveByteArray = (fileName, byte) => {
    let blob = new Blob([byte], {type: "application/pdf"});
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
};

let lastAutoSaveId = 0;
const autoSaveCurrentFont = (data) => {
    const id = ++lastAutoSaveId;
    setTimeout(() => {
        if (lastAutoSaveId === id) {
            localStorage.setItem('current-font-glyphs', JSON.stringify(data));
        }
    }, 100);
}

const Edit = () => {
    const [glyphs, setGlyphs] = useState([]);
    const [fontName, setFontName] = useState("my-font")
    let [glyphId, setGlyphId] = useState(0);

    useEffect(() => {
        const autoSavedFont = localStorage.getItem('current-font-glyphs');
        if (autoSavedFont) {
            const { fontName, glyphs } = JSON.parse(autoSavedFont);
            setFontName(fontName);
            setGlyphs(glyphs);
        }
    }, []);

    const setGlyphsAndSave = (glyphs) => {
        setGlyphs(glyphs);
        autoSaveCurrentFont({ fontName, glyphs });
    }

    const setFontNameAndSave = (fontName) => {
        setFontName(fontName);
        autoSaveCurrentFont({ fontName, glyphs });
    }

    const setGlyph = (glyph) => {
        setGlyphsAndSave(glyphs.map(c => {
            if (c.id === glyph.id) {
                return glyph;
            } else {
                return c;
            }
        }))
    }
    const getGlyph = (id) => {
        for(let glyph of glyphs) {
            if (glyph.id === id) return glyph;
        }
    }
    const addGlyph = (glyph) => {
        setGlyphsAndSave([...glyphs, glyph]);
    }

    const editedGlyph = getGlyph(glyphId);

    if (glyphId < 0) {
        setTimeout(() => setGlyphId(-glyphId), 0);
    }

    // pt = preview transform
    const pt = x => x / 4;

    return (
        <>
            <div className={e.wrapper}>
                <p className={e.title}>Редактор шрифтов</p>
                <p className={e.title_text}>Здесь Вы можете создать свой шрифт с помощью встроенного в сайт редактора. Чтобы добавить символ необходимо нажать кнопку со знаком "+", нажмите на появившуюся карточку и начинайте рисовать. </p>
                {
                    glyphs.length > 0 ?<>
                        <div className={e.button_down}>
                            <button onClick={e => {
                                saveByteArray(fontName + ".ttf", svg2ttf(buildSvgFont(glyphs, fontName), {
                                    id: fontName,
                                    fullname: fontName,
                                    familyname: fontName,
                                    description: fontName + "  created with " + window.location.host,
                                    url: window.location.host,
                                    copyright: ""
                                }).buffer);
                            }}>Скачать шрифт
                            </button>
                            <p>Название шрифта:</p>
                            <input value={fontName} onChange={e => setFontNameAndSave(e.target.value)}/>
                        </div>
                    </>: <></>
                }

                <div className={e.box}>
                    <div className={e.box1}>
                        {glyphs.map(
                            c =>
                                <>
                                    <div className={e.box_card} onClick={() => {setGlyphId(-c.id);}}>
                                        <h2>Card: {c.symbol}</h2>
                                        <br/>
                                        <div className={e.box_card_content}>
                                            <Preview width={125} height={125}
                                                     objectTypes={{
                                                         'path': Path
                                                     }}
                                                     objects={
                                                         c.data.map(o => ({
                                                             ...o,
                                                             x: pt(o.x), y: pt(o.y),
                                                             moveX: pt(o.moveX), moveY: pt(o.moveY),
                                                             path: o.path.map(({x, y, x1, y1, x2, y2}) => ({
                                                                 x: pt(x), y: pt(y),
                                                                 x1: pt(x1), y1: pt(y1),
                                                                 x2: pt(x2), y2: pt(y2)
                                                             }))
                                                     }))}
                                            />
                                        </div>
                                    </div>
                                </>
                        )}
                        <button className={e.button} onClick={() => {
                            addGlyph({
                                symbol: '',
                                data: [],
                                id: Date.now(),
                            })
                        }}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>

                    <div className={e.box2}>
                        {
                            editedGlyph ?
                                <>
                                    <div className={e.input_box}>
                                        <p>Введите символ</p>
                                        <input className={e.input} type="text" placeholder="Символ" value={editedGlyph.symbol} onChange={(e)=>{
                                            setGlyph({...editedGlyph, symbol: e.target.value});

                                        }}/>
                                    </div>
                                    <Designer width={500} height={500}
                                              objectTypes={{
                                                  'path': Path
                                              }}
                                              onUpdate={(objects) => {
                                                  setGlyph({...editedGlyph, data: objects});
                                              }}
                                              objects={editedGlyph.data}/>
                                </>

                                : <p className={e.message}>Выберите карточку</p>
                        }
                    </div>
                </div>


            </div>

        </>
    )
}

export default Edit;


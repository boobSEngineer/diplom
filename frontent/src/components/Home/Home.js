import React from "react";
import c from "./Home.module.css";

const Home = (props) => {
    return (
        <>
           <div>
               <div className={c.wrapper}>
                   <div className={c.content_setting}>
                       <div className={c.sort_fonts}>
                           <select >
                               <option value="All" selected="selected">Сортировать</option>
                               <option value="">Тренд</option>
                               <option value="">Самый популярный</option>
                               <option value="">Новое</option>
                               <option value="">Алфовит</option>
                           </select>
                       </div>
                       <div className={c.sentence_font}>
                           <input placeholder="вывод шрифтов"/>
                       </div>
                       <div className={c.range_font}>
                           <div className={c.font_px}>0px</div>
                           <input type="range"/>
                           <button type="reset">Сбросить</button>
                       </div>
                       <div className={c.initial_base}>
                           <button>Выбор вида картинок</button>
                       </div>
                       <div className={c.sort_language}>
                           <select >
                               <option value="All" selected="selected"> Язык</option>
                               <option value="">Русский</option>
                               <option value="">Английский</option>
                           </select>
                       </div>
                   </div>
               </div>
               <br/>
               <div className={c.content_fonts}>
                   {
                       props.fonts.map(f =>
                           <div>
                               <div>
                                   <p>{f.full_name}</p>
                                   <p>Сделано ....</p>
                               </div>
                               <div>
                                   <p>Просмотры: {f.views}</p>
                                   <p>Лайки: 0</p>
                               </div>

                           </div>
                       )
                   }
               </div>
           </div>
        </>
    )
}

export default Home;

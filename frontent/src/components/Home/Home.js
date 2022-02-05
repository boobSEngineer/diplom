import React from "react";

const Home = (props) => {
    return <div>
        <p>(текст про то что это за сайт)</p>
        <input placeholder="большая поисковая линия" type="text"/>
        <p>меняем размер шрифта</p>
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
}

export default Home;

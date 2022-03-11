import React from "react";

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

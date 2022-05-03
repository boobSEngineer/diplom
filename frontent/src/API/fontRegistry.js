import React from "react";

let fontRegistryCache = {};


export const fontRegistry = (path) => {
    if (!path)
        return
    const name = path.replace(/[^a-zA-Z0-9]/g, "_");
    if (!fontRegistryCache.hasOwnProperty(name)) {
        const font = new FontFace(name, `url(http://localhost:4000/file/fonts/${path}) format('truetype')`);
        font.load().then( font => {
            // add font to document
            document.fonts.add(font);
            document.body.classList.add('fonts-loaded');
        })
        fontRegistryCache[name] = true;
    }
    return name;
}


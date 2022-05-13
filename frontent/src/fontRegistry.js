import React from "react";

let fontRegistryCache = {};
let fontRegistryQueue = null;

export const fontRegistry = (path) => {
    if (!path)
        return
    const name = path.replace(/[^a-zA-Z0-9]/g, "_");
    if (!fontRegistryCache.hasOwnProperty(name)) {
        const loadFont = () => {
            // console.log("started", name)
            const font = new FontFace(name, `url(http://localhost:4000/file/fonts/${path}) format('truetype')`);
            return new Promise(resolve => {
                font.load().then(font => {
                    // console.log("completed", name)
                    // add font to document
                    document.fonts.add(font);
                    document.body.classList.add('fonts-loaded');
                }).catch(() => {}).finally(() => resolve());
            });
        }
        if (fontRegistryQueue == null) {
            fontRegistryQueue = loadFont();
        } else {
            const lastQueueItem = fontRegistryQueue;
            fontRegistryQueue = new Promise(resolve => {
                lastQueueItem.then(() => {
                    loadFont().finally(() => {
                        resolve();
                    });
                });
            });
        }
        fontRegistryCache[name] = true;
    }
    return name;
}


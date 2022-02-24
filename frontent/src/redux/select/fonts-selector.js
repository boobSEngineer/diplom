import {createSelector} from "reselect";
import {getCurrentUser} from "./user-selector";


export const getFonts = (state) => {
    return state.fontsWork.fonts;
}

export const getFontsByCurrentId = createSelector(getFonts, getCurrentUser, (fonts, id_user) => {
    return fonts.filter(fonts => fonts.id_user === id_user)
})

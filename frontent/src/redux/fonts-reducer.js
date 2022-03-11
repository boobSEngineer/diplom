import {fontsAPI} from "../API/api";

const SET_FONTS = 'SET-FONTS'


const initialState = {
    fonts: [],
    pageSize: 100,
    totalFontsCount: 0,
    page: 1,
};

const fontsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FONTS: {
            return {
                ...state,
                fonts: [...action.fonts]
            }
        }

        default:
            return state
    }

}

export const fontSetCreate = (fonts) => {
    return {type: SET_FONTS, fonts}
}

export const RequestFontsThunkCreate = () => {
    return (dispatch) => {
        fontsAPI.getFonts()
            .then(data => {
                if (data != null) {
                    dispatch(fontSetCreate(data))
                }
            })
    }
}

export const RequestCurrentFontsThunkCreate = (id_user) => {
    return (dispatch) => {
        fontsAPI.getCurrentFonts(id_user)
            .then(data => {
                if (data != null) {
                    dispatch(fontSetCreate(data))
                }
            })
    }
}


export default fontsReducer;


import {fontsAPI} from "../API/api";
import {fileAPI} from "../API/api2";

const SET_FONTS = 'SET-FONTS'
const SET_CURRENT_FONT = 'SET-CURRENT-FONT'
const SET_STATUS_MESSAGE_AND_SUCCESS = 'SET-STATUS-MESSAGE-AND-SUCCESS';

const initialState = {
    fonts: [],
    current_font: [],
    pageSize: 100,
    totalFontsCount: 0,
    status_message: null,
    status_success: null,
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
        case SET_STATUS_MESSAGE_AND_SUCCESS: {
            return {
                ...state,
                status_message: action.status_message,
                status_success: action.status_success,
            }
        }
        case SET_CURRENT_FONT: {
            return {
                ...state,
                current_font: action.font,
            }
        }
        default:
            return state
    }

}

export const setFontsCreate = (fonts) => {
    return {type: SET_FONTS, fonts}
}

export const setCurrentFontCreate = (font) => {
    return {type: SET_CURRENT_FONT, font}
}

export const setStatusMessageAndSuccessCreate = (status_message, status_success) => {
    return {type: SET_STATUS_MESSAGE_AND_SUCCESS, status_message, status_success}
}

//All fonts
export const RequestFontsThunkCreate = () => {
    return (dispatch) => {
        fontsAPI.getFonts()
            .then(data => {
                if (data !== null) {
                    dispatch(setFontsCreate(data))
                }
            })
    }
}
// view all fonts current user id
export const RequestFontsByIdThunkCreate = (id_user) => {
    return (dispatch) => {
        if (id_user !== null) {
            fontsAPI.getCurrentFonts(id_user)
                .then(data => {
                    if (data != null) {
                        dispatch(setFontsCreate(data))
                    }
                })
        } else {
            dispatch(setFontsCreate({}))
        }
    }
}
// view current font
export const getFontThunkCreate = (id_font) => {
    return (dispatch) => {
        if (id_font !== null) {
            fontsAPI.getCurrentFont(id_font)
                .then(data => {
                    if (data != null) {
                        fontsAPI.viewFont(id_font).then(()=>{});
                        dispatch(setCurrentFontCreate(data))
                    }
                })
        }else {
            dispatch(setCurrentFontCreate([]))
        }

    }
}

//sort fonts
export const selectFontsByThunkCreate = (parameters) => {
    return (dispatch) => {
        fontsAPI.selectBy(parameters)
            .then(data => {
                if (data !== null) {
                    dispatch(setFontsCreate(data))
                }
            })
    }
}

export const searchFontsByLetterThunkCreate = (search_string) => {
    return (dispatch) => {
        fontsAPI.searchFontsByLetter(search_string)
            .then(data => {
                if (data !== null) {
                    dispatch(setFontsCreate(data))
                }
            })
    }
}

export const uploadFontsThunkCreate = (data) => {
    return (dispatch) => {
        fileAPI.uploadFile(data)
            .then(data => {
                dispatch(setStatusMessageAndSuccessCreate(data.message, data.success));
            })
    }

};

export const deleteFontByIdThunkCreate = (id_font, id_user) => {
    return (dispatch) => {
        fontsAPI.deleteFontById(id_font)
            .then(data => {
                if (id_user !== null) {
                    dispatch(RequestFontsByIdThunkCreate(id_user))
                } else {
                    console.error("delete_font by id got null current user id")
                }

            })
    }

};


export default fontsReducer;


import {fontsAPI} from "../API/api";
import {fileAPI} from "../API/api2";

const SET_FONTS = 'SET-FONTS';
const SET_CURRENT_FONT = 'SET-CURRENT-FONT';
const SET_STATUS_MESSAGE_AND_SUCCESS = 'SET-STATUS-MESSAGE-AND-SUCCESS';
const LIKE = 'LIKE';
const SET_LIKE_FOR_CURRENT_FONT = 'SET-LIKE-FOR-CURRENT-FONT';


const initialState = {
    fonts: [],
    current_font:null,
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
        case SET_LIKE_FOR_CURRENT_FONT: {
            return {
                ...state,
                current_font: {...state.current_font, like_counter: action.like_counter, is_liked: action.is_liked}

            }
        }
        case LIKE: {
            return {
                ...state,
                fonts: state.fonts.map(f => {
                    if (f.id_font === action.id_font) {
                        return {...f, like_counter: action.like_counter, is_liked: action.is_liked}
                    }
                    return f;
                })
            }
        }

        default:
            return state
    }

}

export const setFontsCreate = (fonts) => {
    return {type: SET_FONTS, fonts}
}

export const setLikeCreate = (id_font, like_counter, is_liked) => {
    return {type: LIKE, id_font, like_counter, is_liked}
}

export const setLikeForCurrentFontCreate = (like_counter, is_liked) => {
    return {type: SET_LIKE_FOR_CURRENT_FONT, like_counter, is_liked}
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
                    if (data != null && data.success) {
                        fontsAPI.viewFont(id_font).then(() => {
                        });
                        dispatch(setCurrentFontCreate(data))
                    } else {
                        dispatch(setCurrentFontCreate(null))
                    }
                })
        } else {
            dispatch(setCurrentFontCreate(null))
        }

    }
}

export const getLikedFontsThunkCreate = (id_user) => {
    return (dispatch) => {
        fontsAPI.getLikedFonts()
            .then(data => {
                if (id_user !== null) {
                    dispatch(setFontsCreate(data))
                } else {
                    dispatch(setFontsCreate([]))
                }
            })
    }
}

//sort fonts
export const selectFontsByThunkCreate = (parameters) => {
    return (dispatch) => {
        fontsAPI.selectBy(parameters)
            .then(data => {
                if (data) {
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

export const likeFontThunkCreate = (id_font) => {
    return (dispatch) => {
        fontsAPI.likeFont(id_font)
            .then((data) => {
                if (data.success) {
                    dispatch(setLikeCreate(id_font, data.count, data.is_liked))
                }
            });
    }
}
export const likeForCurrentFontThunkCreate = (id_font) => {
    return (dispatch) => {
        fontsAPI.likeFont(id_font)
            .then((data) => {
                if (data.success) {
                    dispatch(setLikeForCurrentFontCreate(data.count, data.is_liked))
                }
            });
    }
}

export default fontsReducer;


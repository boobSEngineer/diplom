import {authAPI, userAPI} from "../API/api";
import {RequestCurrentFontsThunkCreate} from "./fonts-reducer";

const SET_AUTH_DATA_USER = 'SET-AUTH-DATA-USER'

const initialState = {
    id_user: null,
    login: null,
    name: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
};


export const setUserDataCreate = (id_user, login, name, isAuth) => {
    return {type: SET_AUTH_DATA_USER, payload: {id_user, login, name, isAuth}}
};

export const updateUserDataThunkCreate = () => {
    return (dispatch) => {
        return userAPI.getCurrentUser()
            .then(data => {
                if (data !== null) {
                    let { id_user, login, name } = data;
                    dispatch(setUserDataCreate(id_user, login, name, true))
                }
            })
    }
};

export const loginThunkCreate = (login, password) => {
    return (dispatch) => {
        return authAPI.logIn(login, password)
            .then(data => {
                dispatch(updateUserDataThunkCreate())
            })
    }
};

export const logoutThunkCreate = () => {
    return (dispatch) => {
        return authAPI.logOut()
            .then(data => {
                dispatch(setUserDataCreate(null, null, null, false))
            })
    }

};

export const registerThunkCreate = (login, name, password) => {
    return(dispatch) => {
        return authAPI.registerUser(login, name, password)
            .then (data => {
                if (data !== null) {
                    dispatch(updateUserDataThunkCreate())
                }
            })
    }

};

export default authReducer;


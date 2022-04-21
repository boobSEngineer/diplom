import {authAPI, userAPI} from "../API/api";
import React from "react";

const SET_AUTH_DATA_USER = 'SET-AUTH-DATA-USER';
const SET_STATUS_MESSAGE = 'SET-STATUS-MESSAGE';

const initialState = {
    id_user: null,
    login: null,
    name: null,
    status_message: null,
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
        case SET_STATUS_MESSAGE: {
            return {
                ...state,
                status_message: action.status_message,
            }
        }

        default:
            return state;
    }
};


export const setUserDataCreate = (id_user, login, name, isAuth) => {
    return {type: SET_AUTH_DATA_USER, payload: {id_user, login, name, isAuth}}
};


export const setStatusMessageCreate = (status_message) => {
    return {type: SET_STATUS_MESSAGE, status_message}
}

export const updateCurrentUserDataThunkCreate = () => {
    return (dispatch) => {
        return userAPI.getCurrentUser()
            .then(data => {
                if (data) {
                    let {id_user, login, name} = data;
                    if (id_user != null) {
                        dispatch(setUserDataCreate(id_user, login, name, true));
                    } else {
                        dispatch(setUserDataCreate(id_user, login, name, false));
                    }

                }
            })
    }
};

export const loginThunkCreate = (login, password) => {
    return (dispatch) => {
        return authAPI.logIn(login, password)
            .then(data => {
                if (data.success) {
                    dispatch(updateCurrentUserDataThunkCreate())
                } else {
                    dispatch(setStatusMessageCreate(data.message))
                }

            })
    }
};

export const logoutThunkCreate = () => {
    return (dispatch) => {
        return authAPI.logOut()
            .then(data => {
                if (data.success) {
                    dispatch(setUserDataCreate(null, null, null, false))
                } else {
                    dispatch(setStatusMessageCreate(data.message))
                }

            })
    }

};

export const registerThunkCreate = (login, name, password) => {
    return (dispatch) => {
        return authAPI.registerUser(login, name, password)
            .then(data => {
                if (data.success) {
                    dispatch(updateCurrentUserDataThunkCreate())
                } else {
                    dispatch(setStatusMessageCreate(data.message))
                }
            })
    }

};

export default authReducer;


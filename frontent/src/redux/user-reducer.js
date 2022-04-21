import {userAPI} from "../API/api";

const SET_AUTH_DATA_USER_BY_ID = 'SET-AUTH-DATA-USER-BY-ID';

const initialState = {
    id_user: null,
    login: null,
    name: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA_USER_BY_ID: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
};


export const setUserDataByIdCreate = (id_user, login, name) => {
    return {type: SET_AUTH_DATA_USER_BY_ID, payload: {id_user, login, name}}
};


export const updateUserDataThunkCreate = (id_user) => {
    return (dispatch) => {
        return userAPI.getUser(id_user)
            .then(data => {
                if (data) {
                    let {id_user, login, name} = data;
                    dispatch(setUserDataByIdCreate(id_user, login, name));
                }
            })
    }
};



export default userReducer;


export const getName= (state) => {
    return state.auth.name;
}
export const getLogin = (state) => {
    return state.auth.login;
}
export const getUid= (state) => {
    return state.auth.id_user;
}
export const getCurrentUser = (state) => {
    return state.auth.id_user;
}

export const getAuth = (state) => {
    return state.auth.isAuth
}

export const getStatusMessage = (state) => {
    return state.auth.status_message;
}

/*----------------------------------------------ByID-----------------------------------------------*/

export const getNameById= (state) => {
    return state.userId.name;
}
export const getLoginById = (state) => {
    return state.userId.login;
}
export const getUserIdById= (state) => {
    return state.userId.id_user;
}



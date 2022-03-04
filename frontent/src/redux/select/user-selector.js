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

export const getInitial = (state) => {
    return state.app.initialized;
}

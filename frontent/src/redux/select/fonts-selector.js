export const getCurrentFont = (state) => {
    return state.fontsWork.current_font;
}

export const getFontsById = (state) => {
    return state.fontsWork.fonts;
}

export const getStatusMessage = (state) => {
    return state.fontsWork.status_message;
}
export const getStatusSuccess = (state) => {
    return state.fontsWork.status_success;
}




import {updateCurrentUserDataThunkCreate} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS : {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
}

export const initializedSuccessCreate = () => {
    return {type:INITIALIZED_SUCCESS}
}

export const initializedThunkCreate = () => {
    return (dispatch) => {
        let promise = dispatch(updateCurrentUserDataThunkCreate())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessCreate());
            })
    }
}

export default appReducer;

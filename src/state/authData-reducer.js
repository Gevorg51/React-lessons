let SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,    
            }
        };
        default: return state;
    }
}

export const setAuthData = (id, email, login) => ({ type: SET_AUTH_DATA, id, email, login })

export default authReducer
let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case setUserProfileAC: {
            return {...state, profile: action.profile}
        }
        default: return state                
    }
    
}

export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
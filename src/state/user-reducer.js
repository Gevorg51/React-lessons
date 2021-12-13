let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        { id: 1, followed: 'true', fullName: 'Gevorg', status: 'lok', location: { city: 'Abovyan', country: 'Armenia' } },
        { id: 2, followed: 'false', fullName: 'John', status: 'lok', location: { city: 'California', country: 'United States' } },
        { id: 3, followed: 'true', fullName: 'Jennifer', status: 'lok', location: { city: 'Paris', country: 'France' } },
    ]
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user === action.userId) {
                        return { ...user, followed: true, }
                    };
                    return state;
                }),
            };
        }

        case UNFOLLOW:{
            let stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user === action.userId) {
                        return { ...user, followed: false }
                    };
                    return state;
                })
            };
            
        }

        default: return state
    }
};

export const FOLLOWAC = (userId) => ({ type: FOLLOW, userId })
export const UNFOLLOWAC = (userId) => ({ type: UNFOLLOW, userId })

export default userReducer;
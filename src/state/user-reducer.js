let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
         followed: 'true', fullName: 'Gevorg', status: 'lok', location: { city: 'Abovyan', country: 'Armenia' } },

        { id: 2, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
         followed: 'false', fullName: 'John', status: 'lok', location: { city: 'California', country: 'United States' } },

        { id: 3, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
         followed: 'true', fullName: 'Jennifer', status: 'lok', location: { city: 'Paris', country: 'France' } },
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
        };

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user === action.userId) {
                        return { ...user, followed: false }
                    };
                    return state;
                })
            };
        };

        case SET_USERS: {
            return {...state, users: [ ...state.users, ...action.users]}
        };

        default: return state
    }
};

export const FOLLOWAC = (userId) => ({ type: FOLLOW, userId })
export const UNFOLLOWAC = (userId) => ({ type: UNFOLLOW, userId })
export const SET_USERSAC = (users) => ({ type: SET_USERS, users })

export default userReducer;
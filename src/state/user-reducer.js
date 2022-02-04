let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // {
        //      id: 1, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
        //     followed: 'true', fullName: 'Gevorg', status: 'lok', location: { city: 'Abovyan', country: 'Armenia' }
        // },
        // {
        //     id: 2, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
        //     followed: 'false', fullName: 'John', status: 'lok', location: { city: 'California', country: 'United States' }
        // },
        // {
        //     id: 3, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
        //     followed: 'true', fullName: 'Jennifer', status: 'lok', location: { city: 'Paris', country: 'France' }
        // },
    ]
}

let userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return { ...u, followed: true, }
                    };
                    return u;
                }),
            };
        };

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    };
                    return u;
                })
            };
        };

        case SET_USERS: {
            return { ...state, users: action.users }

        }
        default: return state
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default userReducer;
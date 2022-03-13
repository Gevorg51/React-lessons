let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_IS_FETCHING = "SET_IS_FETCHING"

let initialState = {
    users: [ ],
    isFetching: false,
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

        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        
        default: return state
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export default userReducer;
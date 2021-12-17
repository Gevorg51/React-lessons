import { connect } from "react-redux";
import { UNFOLLOWAC, FOLLOWAC, SET_USERSAC} from "../../state/user-reducer";
import Users from "./users";

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FOLLOWAC(userId))
        },

        unFollow: (userId) => {
            dispatch(UNFOLLOWAC(userId))
        },

        setUsers: (users) => {
            dispatch(SET_USERSAC(users))
        }
    }
}

let usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer
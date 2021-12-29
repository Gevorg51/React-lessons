import { connect } from "react-redux";
import { unfollowAC, followAC, setUsersAC} from "../../state/user-reducer";
import UsersCLS from "./usersCLS";

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

let usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCLS)

export default usersContainer
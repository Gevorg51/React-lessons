import React from 'react';
import { connect } from "react-redux";
import { unfollowAC, followAC, setUsersAC, setIsFetchingAC } from "../../state/user-reducer";
import Users from "./users";
import Preloader from '../common/preLoader/Preloader';
import { usersAPI } from '../../api/usersAPI'; 

class UsersCLS extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers().then(items => {
            this.props.setIsFetching(false)
            this.props.setUsers(items)
        });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} />
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        isFetching: state.postsData.isFetching,
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
        },

        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

let usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCLS)

export default usersContainer
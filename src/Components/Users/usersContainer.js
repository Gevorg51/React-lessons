import React from 'react';
import * as axios from 'axios'
import { connect } from "react-redux";
import { unfollowAC, followAC, setUsersAC } from "../../state/user-reducer";
import Users from "./users";

class UsersCLS extends React.Component {
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            this.props.setUsers(response.data)
        });
    };

    render() {
        return <Users {...this.props}/>
    }
};

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
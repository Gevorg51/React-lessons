import { connect } from "react-redux";
import Users from "./users";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

let usersContainer = connect (mapStateToProps, mapDispatchToProps)(Users) 
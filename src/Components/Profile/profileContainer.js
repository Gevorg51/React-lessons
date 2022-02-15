import React from 'react';
import * as axios from 'axios';
import Profile from './profile';
import {setUserProfileAC} from '../../state/pofileData-reducer';
import {connect} from 'react-redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile").then(response => {
            debugger;
            this.props.setUserProfileAC(response.data)
        })
    }

    render() { return <Profile {...this.props} /> }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)
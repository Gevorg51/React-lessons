import React from 'react';
import * as axios from 'axios';
import Profile from './profile';
import { setUserProfileAC } from '../../state/profileData-reducer';
import { connect } from 'react-redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfileAC(response.data)
        });
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile
    }
}
export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)
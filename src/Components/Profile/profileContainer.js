import React from 'react';
import * as axios from 'axios';
import Profile from './profile';
import { setUserProfileAC } from '../../state/profileData-reducer';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataComponent)
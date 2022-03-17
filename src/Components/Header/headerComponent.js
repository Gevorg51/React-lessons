import * as axios from 'axios';
import React from 'react';
import Header from './header';
import { setAuthData } from '../../state/authData-reducer';
import { connect } from 'react-redux'

class HeaderComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                this.props.setAuthData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapDispatchToProps = (state) => ({
    isAuth: state.authData.isAuth,
    login: state.authData.login,
})

export default connect(mapDispatchToProps, { setAuthData })(HeaderComponent)
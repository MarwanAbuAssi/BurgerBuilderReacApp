import React, {Component} from 'react'
import * as action from '../../../store/actions/index'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
        localStorage.removeItem('token')
    }

    render() {
        return <Redirect to='/login'/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(action.authLogout())
    };
};
export default connect(null,mapDispatchToProps)(Logout);
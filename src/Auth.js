import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from './Auth.redux';

@connect(
    state=>state.auth,
    {login}
)
class Auth extends React.Component {
    render(){
        return(
            <div>
                { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
                请登陆
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}
export default Auth;
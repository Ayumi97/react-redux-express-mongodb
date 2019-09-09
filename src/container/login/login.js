import React from 'react';
import Logo from '../../component/logo/logo';
import { Redirect } from 'react-router-dom';
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';

function hello(){
    console.log('hello')
}

function WrapperHello(fn){
    return function(){
        console.log('before say helle')
        fn()
        console.log('after hello')
    }
}

hello = WrapperHello(hello)
hello()
@connect(
    state=>state.user,
    { login }
)
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:''
        }

        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    register(){
        console.log(this.props)
        this.props.history.push('/register')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state);
    }
    render(){
        return(
            <div>
                {this.props.redirectTo&&this.props.redirectTo!='/login' ? <Redirect to={this.props.redirectTo} /> : null}               
                <Logo />
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                    {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >user</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('pwd',v)}
                        >pwd</InputItem>
                    </List>
                    <Button
                        type='primary'
                        onClick={this.handleLogin}
                    >登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;
import React from 'react';
import Logo from '../../component/logo/logo';
import { Redirect } from 'react-router-dom';
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import YForm from '../../component/y-form/YForm';

//反向继承
// function WrapperHello(Comp){
//     class WrapComp extends React.Component{
//         componentDidMount(){
//             console.log('高阶组件新增的生命周期,加载完成')
//         }
//         render(){
//             return <Comp></Comp>
//         }
//     }
    // class WrapComp extends React.Component{
    //     render(){
    //         return(
    //             <div>
    //                 <p>这是一个高阶组件特有的元素</p>
    //                 <Comp name='text' {...this.props}> </Comp>
    //             </div>
    //         )
    //     }
    // }
    // return WrapComp
// }
// @WrapperHello
// class Hello extends React.Component{
//     render(){
//         return(
//             <h2>hello i love music</h2>
//         )
//     }
// }
// Hello = WrapperHello(Hello)


@connect(
    state=>state.user,
    { login }
)
@YForm
class Login extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     user:'',
        //     pwd:''
        // }

        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    register(){
        console.log(this.props)
        this.props.history.push('/register')
    }
    // handleChange(key,val){
    //     this.setState({
    //         [key]:val
    //     })
    // }
    handleLogin(){
        this.props.login(this.props.state);
    }
    render(){
        return(
            <div>
                {/* <Hello /> */}
                {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} /> : null}               
                <Logo />
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                    {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem
                            onChange={v=>this.props.handleChange('user',v)}
                        >user</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={v=>this.props.handleChange('pwd',v)}
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
import React from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/logo';
import { List, InputItem, Radio, WhiteSpace, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import YForm from '../../component/y-form/YForm';

@connect(
    state=>state.user,
    { register }
)
@YForm
class Register extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     user:'',
        //     pwd:'',
        //     repeatpwd:'',
        //     type:'genius'   //or boss
        // }
        this.handleRegister = this.handleRegister.bind(this)
    }
    // handleChange(key,val){
    //     this.setState({
    //         [key]:val
    //     })
    // }
    componentDidMount(){
        this.props.handleChange('type','genius')
    }
    handleRegister(){
        this.props.register(this.props.state)
    }

    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo />
                <h2>注册页</h2>
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
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={v=>this.props.handleChange('repeatpwd',v)}
                    >repeatpwd</InputItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.props.state.type === 'genius'}
                        onChange={()=>this.props.handleChange('type','genius')}
                    >
                        牛人
                    </RadioItem>
                    <WhiteSpace />
                    <RadioItem
                         checked={this.props.state.type === 'boss'}
                         onChange={()=>this.props.handleChange('type','boss')}
                    >
                        老板
                    </RadioItem>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </List>
                
            </div>
        )
    }
}

export default Register;
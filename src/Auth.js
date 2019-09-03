import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getUserData } from './Auth.redux';
// import axios from 'axios';

@connect(
    state=>state.auth,
    {login,getUserData}
)
class Auth extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:[]
    //     }
    // }
    componentDidMount(){
        this.props.getUserData()
        // axios.get('/data')
        //     .then(res=>{
        //         if(res.status === 200){
        //             this.setState({data: res.data})
        //         }
        //         // console.log(res.data)
        //     })
    }
    render(){
        return(
            <div>
                <h2>my name is {this.props.user},my age is {this.props.age} </h2>
                { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
                请登陆
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}
export default Auth;
import React from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './Auth.redux';

function Second(){
    return (<div>dfdgdg</div>)
}
function Third(){
    return (<div>dfdgdg</div>)
}

@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends React.Component {
    
    render(){
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <ul>
                    <li>
                        <Link to='/dashboard/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/second'>2营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/third'>3营</Link>
                    </li>
                </ul>
                <Route path='/dashboard/second' component={Second}></Route>
                <Route path='/dashboard/third' component={Third}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin;
    }
}
export default Dashboard;
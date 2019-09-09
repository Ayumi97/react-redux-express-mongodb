import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './config';
import Register from './container/register/register';
import Login from './container/login/login';
import AuthRoute from './component/authroute/authroute';
import BossInfo from './container/bossinfo/BossInfo';
import GeniusInfo from './container/geniusinfo/GeniusInfo';
import Dashboard from './component/dashboard/Dashboard';
import Chat from './component/chat/Chat';
import './index.css';


const reduxdevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxdevtools
));


//boss genius me msg 4个页面
ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route path='/geniusinfo' component={GeniusInfo}></Route>
                        <Route path='/bossinfo' component={BossInfo}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/chat/:user' component={Chat}></Route>
                        <Route component={Dashboard}></Route>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
);

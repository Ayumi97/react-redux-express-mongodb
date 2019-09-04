import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './config';
import Register from './container/register/register';
import Login from './container/login/login';
import AuthRoute from './component/authroute/authroute';
import './index.css';


const reduxdevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxdevtools
));

function Boss(){
    return (
        <div>boss</div>
    )
}

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Route path='/boss' component={Boss}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
);

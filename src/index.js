import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Auth from './Auth';
import Dashboard from './Dashboard';
import reducers from './reducers';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

const reduxdevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxdevtools
));


ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import request from "./services/request";
import reducers from './store/reducers';
import Home from './routes/home';
import Login from './routes/login';
import PrivateRoute from './components/privateRoute';
import NoMatch from './routes/noMatch';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
request({
    type: 'INITIAL-STATE',
    url: '/state',
    method: 'GET',
    body: null,
})((response: any) => store.dispatch(response));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" component={Home} store={store} />
                <Route component={NoMatch} />
            </Switch>
        </Provider>
    </Router>,
    document.getElementById('root')
);

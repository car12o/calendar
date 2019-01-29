import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import reducers from './store/reducers';
import Home from './routes/home';
import NoMatch from './routes/noMatch';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={NoMatch} />
            </Switch>
        </Provider>
    </Router>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import Home from './routes/home';
import NoMatch from './routes/noMatch';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NoMatch} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

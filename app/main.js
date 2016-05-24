import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

// require('autotrack');

// In the analytics.js tracking snippet
// ga('create', 'UA-78288609-1', 'auto');
// ga('require', 'autotrack');
// ga('send', 'pageview');

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
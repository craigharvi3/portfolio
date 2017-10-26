import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import thunk from 'redux-thunk';

import Layout from './layouts/app';
import App from './components/app';
import NotFound from './components/404';

import reducers from './reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={App} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('app'));

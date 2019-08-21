import * as React from 'react';

import { Route, Switch } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';

const routes = require('./constants/routes.json');

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.SIGN_UP} component={SignUpPage} />
      <Route path={routes.SIGN_IN} component={SignInPage} />
    </Switch>
  </App>
);

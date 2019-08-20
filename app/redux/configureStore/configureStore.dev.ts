import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerActions, routerMiddleware } from 'connected-react-router';

import {actions} from '../modules/user';
import { createHashHistory } from 'history';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import user from '../modules/user';

const history = createHashHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  user
})

const configureStore = (initialState?: any) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...actions,
    ...routerActions
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
        actionCreators
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if ((module as any).hot) {
    (module as any).hot.accept(
      '../modules/user', // eslint-disable-next-line global-require
      () => store.replaceReducer(require('../modules/user').default)
    );
  }

  return store;
};

export default { configureStore, history };

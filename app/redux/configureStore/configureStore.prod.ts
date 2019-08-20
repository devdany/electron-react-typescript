import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createHashHistory } from 'history';
import thunk from 'redux-thunk';
import user from '../modules/user';

const history = createHashHistory();
const rootReducer = combineReducers({
  router: connectRouter(history),
  user
})
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: any) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };

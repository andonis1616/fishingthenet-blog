import { createStore, applyMiddleware, compose } from 'redux';
//logger import for dev

// only for dev
// import logger from 'redux-logger';

import { rootReducers } from './rootReducers';
import monitorReducersEnhancer from './monitorReducers';
import thunkMiddleware from 'redux-thunk';
// declare global {
//   //__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ for dev only
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// only for dev
// const middlewareEnhancer = applyMiddleware(thunkMiddleware, logger);
const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// type RootReducerType = typeof rootReducers;
// export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(
  rootReducers,
  composeEnhancers(middlewareEnhancer, monitorReducersEnhancer),
);
export default store;

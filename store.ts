import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

import rootReducer from './src/reducers';
import rootSaga from './src/sagas';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

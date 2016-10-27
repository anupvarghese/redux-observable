import { createStore, applyMiddleware as makeMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import epic from '../epics';

const epicMiddleware = createEpicMiddleware(epic);
const middleware = [epicMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

if (module.hot) {
  module.hot.accept('../epics', () => {
    const rootEpic = require('../epics').default;
    epicMiddleware.replaceEpic(rootEpic);
  });
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let applyMiddleware = makeMiddleware(...middleware);
if (process.env.NODE_ENV !== 'production') {
  applyMiddleware = composeEnhancers(makeMiddleware(...middleware));
}

const store = createStore(
  reducer,
  applyMiddleware,
);

console.log(applyMiddleware);
export default store;

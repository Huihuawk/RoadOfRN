"use strict";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from '../reducers';

const logger = store => next => action => {
  if(typeof action === 'function') console.log('dispatching a function');
  else console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

let middleWares = [
  logger,
  thunk
];

export default function configureStore(onComplete: ()=>void){
  const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(...middleWares),
    )
  );
  persistStore(store, onComplete, ()=> store.getState());
  return store;
}

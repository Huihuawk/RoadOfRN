"use strict";

import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import memoReducer from './memo';

const config = {
  storage: AsyncStorage,
  key: 'root',
};

module.exports = persistCombineReducers(config, {
  memo: memoReducer,
});

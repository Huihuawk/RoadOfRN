'use strict';

import local from '../storage';

import * as TYPES from './types';

const addMemo = (memo) => {
  local.set('memo', memo);
  return {
    type: TYPES.MEMO_ADD,
    data: memo,
  }
};

const loadMemo = () => {
  return local.get('memo')
    .then((memo) => {
      if (memo) {
        return {
          type: TYPES.MEMO_LOAD,
          data: memo,
        }
      }
    });
};

module.exports = {
  addMemo,
  loadMemo,
};

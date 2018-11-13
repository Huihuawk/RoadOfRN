'use strict';

import local from '../storage';

import * as TYPES from './types';

const addMemo = (key, id, memo) => {
  local.set(key, { memo, id }, id);
  return {
    type: TYPES.MEMO_ADD,
    data: { memo, id },
    id,
  }
};

const loadMemo = () => {
  // return local.get('memo')
    // .then((memo) => {
    //   if (memo) {
        return {
          type: TYPES.MEMO_LOAD,
          // data: memo,
        }
      // }
    // });
};

module.exports = {
  addMemo,
  loadMemo,
};

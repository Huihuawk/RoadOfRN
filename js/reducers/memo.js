'use strict';

import * as TYPES from '../actions/types';

export default function memoReducer(state = [], action) {

  switch ( action.type ) {
    case TYPES.MEMO_ADD:
      return {
        ...state,
        data: action.data,
      };
    case TYPES.MEMO_LOAD:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

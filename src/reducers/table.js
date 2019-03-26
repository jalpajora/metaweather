import * as R from 'ramda';

import {
  SEARCH_LOCATION,
  UPDATE_TABLE_RESULT,
} from '../constants/ActionTypes';
  
const initialState = {
  searchText: '',
  result: [],
};

export default function tableResult(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOCATION:
      console.log()
      return R.merge(state, {
        searchText: action.searchText,
      });

    case UPDATE_TABLE_RESULT:
      return R.merge(state, {
        result: action.result,
      });

    default:
      return state;
  }
}

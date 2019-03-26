import * as R from 'ramda';

import {
  UPDATE_LOCATION_INFO
} from '../constants/ActionTypes'
  
const initialState = {}

export default function locationInfo(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION_INFO:
      return R.merge(state, action.locationInfo);

    default:
      return state
  }
}

import { combineReducers } from 'redux'
import table from './table'
import locationInfo from './locationInfo'

const rootReducer = combineReducers({
  table,
  locationInfo,
})

export default rootReducer

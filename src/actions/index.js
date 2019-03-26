import * as types from '../constants/ActionTypes'

export const searchLocation = searchText => ({ type: types.SEARCH_LOCATION, searchText })
export const updateTableResult = result => ({ type: types.UPDATE_TABLE_RESULT, result })
export const updateLocationInfo = locationInfo => ({ type: types.UPDATE_LOCATION_INFO, locationInfo })

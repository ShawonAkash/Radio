import {
  STATION_LIST_REQUEST,
  STATION_LIST_SUCCESS,
  STATION_LIST_FAILED,
} from '../constants/stationConstants'

export const stationListReducer = (state = { stations: [] }, action) => {
  switch (action.type) {
    case STATION_LIST_REQUEST:
      return { loading: true, stations: [] }
    case STATION_LIST_SUCCESS:
      return { loading: false, stations: action.payload }
    case STATION_LIST_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

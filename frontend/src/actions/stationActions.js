import axios from 'axios'
import {
  STATION_LIST_REQUEST,
  STATION_LIST_SUCCESS,
  STATION_LIST_FAILED,
} from '../constants/stationConstants'

export const listStations = () => async (dispatch) => {
  try {
    dispatch({ type: STATION_LIST_REQUEST })
    const { data } = await axios.get('/channels')
    dispatch({ type: STATION_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: STATION_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

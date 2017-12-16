import * as types from './mutation-types'
export default {
  [types.SET_LOCATION] (state, pos) {
    console.log(pos)
    state.latitude = pos.latitude
    state.longitude = pos.longitude
  }
}

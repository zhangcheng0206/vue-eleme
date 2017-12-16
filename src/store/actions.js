import {fetchLocation} from '@/api/location'
import * as types from './mutation-types'

export default {
  // 获取经纬度
  getLocation ({commit}) {
    return new Promise((resolve, reject) => {
      fetchLocation().then(pos => {
        console.log(pos)
        commit(types.SET_LOCATION, {latitude: pos.lat, longitude: pos.lng})
        resolve()
      }).catch(err => {
        console.log(err)
        reject()
      })
    })
  }
}

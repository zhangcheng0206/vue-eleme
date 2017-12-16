import fetch from './fetch'
// 使用百度的api获取地理定位
/* eslint-disable */
export function fetchLocation() {
  const geolocation = new BMap.Geolocation()
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() === BMAP_STATUS_SUCCESS) {
        resolve(r.point)
      } else {
        reject(this.getStatus())
      }
    }, {enableHighAccuracy: true})
  })
}

// 根据经纬度获取地址信息
export function getAddress(latitude, longitude) {
  let url = 'https://restapi.ele.me/bgs/poi/reverse_geo_coding'
  let params = {
    latitude,
    longitude
  }
  return fetch(url, params)
}

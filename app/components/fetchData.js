import {ak} from '../ak/ak'
function fetchUrl () {
  const url = `https://api.map.baidu.com/weather/v1/?district_id=410800&data_type=all&ak=${ak}`
  return fetch(url)
}


function fetchData(callback) {
  fetchUrl()
    .then(res => res.json())
    .then(responce => {
      callback(responce)
    })
    .catch(err => console.log(err))
}

export default fetchData
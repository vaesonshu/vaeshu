import axios from '../util/request'

const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

const forget = (option) => {
  return axios.post('/forget', {
    ...option
  })
}

const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

export { getCode, forget, reg }
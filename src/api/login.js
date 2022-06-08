import axios from '../utils/request'
/**
 * 获取验证码接口
 * @param {*} sid 唯一标识
 * @returns 
 */
const getCode = (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

/**
 * 找回密码接口
 * @param {*} option 用户信息 
 * @returns 
 */
const forget = (option) => {
  return axios.post('/forget', {
    ...option
  })
}

/**
 * 登录接口
 * @param {*} loginInfo 用户登录信息
 * @returns 
 */
const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

/**
 * 找回密码接口
 * @param {*} regInfo 
 * @returns 
 */
const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

export { getCode, forget, login, reg }
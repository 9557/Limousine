import axios from './axios'

// 编写请求函数

// 注册成为司机
// 获取所有省市县
export function API_AREA_ALL(options) {
  return axios.post('/region/list', options)
}

// 区域新增
export function API_AREA_CODE(options) {
  return axios.post('/regioncode/insert')
}

// 注册成为司机
export function API_DRIVER_QUERYMAP(options) {
  return axios.post('/driver/queryMap', options)
}

// 获取协议内容
export function API_PROTOCOL_ID(options) {
  let defaults = {
    id: 1,
  }
  options = Object.assign(defaults, options)
  return axios.post('/protocol/getById', {
    params: options,
  })
}

// 证件照存储
export function API_IDPHOTO_INSET(options) {
  return axios.post('/idphoto/insert', options)
}

// 识别身份证
export function API_USERID(options) {
  // {
  //     "file" 传face正
  //     "side" 传back反
  // }
  return axios.post('/applyvehicle/checkIdCard', options)
}

// 识别驾驶证
export function API_DRIVERID(options) {
  return axios.post('/applyvehicle/driverInfo', options)
}

// 个人信息新增
export function API_USERINFO_INSET(options) {
  let defaults = {
    driverid,
    unionid,
    regioncodeid, //区域code
    signupprovince, //报名省
    signupcity, //报名市
    signuparea, //报名县
    signupplace, //报名详细地址
    addressprovinceid, //居住省id
    addressprovince, //居住省
    addresscityid, //居住市id
    addresscity, //居住市
    addressareaid,
    addressarea,
    detailaddress,
  }
  options = Object.assign(defaults, options)
  return axios.post('/driverownerinfo/insert', options)
}

// 报名地址信息新增
export function API_DRIVERSIGN_INSET(options) {
  let defaults = {}
  options = Object.assign(defaults, options)
  return axios.post('/driversignupinfo/insert', options)
}
// 驾驶信息新增
export function API_DRIVEROWNER_PAGEINSET(options) {
  return axios.post('/driverownerinfo/pageQuery', options)
}
// 注册成为司机最后一步
export function API_DRIVER(options) {
  return axios.post('/driver/')
}

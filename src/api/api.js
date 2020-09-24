import axios from './axios';

// 编写请求函数

// 注册成为司机
// 获取所有省市县
export function API_AREA_ALL(options) {
    return axios.post("/region/list", options)
}

// 区域新增
export function API_AREA_CODE(options) {
    return axios.post("/regioncode/insert")
}

// 注册成为司机
export function API_DRIVER_QUERYMAP(options) {
    return axios.post("/driver/queryMap", options)
}

// 获取协议内容
export function API_PROTOCOL_ID(options) {
    return axios.post("/protocol/getById", options)
}

// 证件照存储
export function API_IDPHOTO_INSET(options) {
    return axios.post("/idphoto/insert", options)
}

// 识别身份证
export function API_USERID(options) {
    // {
    //     "file" 传face正 
    //     "side" 传back反
    // }
    return axios.post("/applyvehicle/checkIdCard", options)
}

// 识别驾驶证
export function API_DRIVERID(options) {
    return axios.post("/applyvehicle/driverInfo", options)
}

// 个人信息新增
export function API_USERINFO_INSET(options) {
    return axios.post("/driverownerinfo/insert", options)
}
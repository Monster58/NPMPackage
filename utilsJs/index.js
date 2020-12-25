/**
 * 工具类函数
 */

// 获取经纬度
export const getPositionH5 = () => {
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                //成功回调
                (position) => {
                    resolve(position)
                },
                //失败回调
                (error) => {
                    let errorType = ['您拒绝获取位置信息,请在设置中打开权限', '获取位置失败，请稍后重试', '获取位置信息超时，请稍后重试']
                    reject(errorType[error.code - 1])
                }
            )
        }
    })
}

/**
 * Map转Object
 * @param {Map} map 
 */
export const mapToObject = (map) => {
    let obj = {}
    for (let [k, v] of map) {
        obj[k] = v
    }
    return obj
}

/**
 * Object转Map
 * @param {Object} obj 
 */
export const objectToMap = (obj) => {
    let map = new Map()
    for (let key in obj) {
        map.set(key, obj[key])
    }
    return map
}

/**
 * Map转JSON
 * @param {Map} map 
 */
export const mapToJOSN = (map) => {
    return JSON.stringify(mapToObject(map))
}

/**
 * JOSN转Map
 * @param {JSON} json 
 */
export const jsonToMap = (json) => {
    return objectToMap(JSON.parse(json))
}
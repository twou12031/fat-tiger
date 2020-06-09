
import request from '../utils/axios'

const HTTPSuccessFn = function (res) {
    return res.data
}

const HandleServerError = function (data) {
    if (data.Code === 1 || (typeof (data) === 'string' && data.indexOf('http') !== -1)) {
        return data
    }
    return Promise.reject(data)
}


const HTTPFailedFn = function (err) {
    if (err.Code === 1) {
        return err.Data
    }
    return Promise.reject(err)
}

/*
    params:
        - options
        {
            method,
            headers,
            url,
            params,
            data
        }
*/
const foo = function (options) {
    return request(options)
        .then(HTTPSuccessFn)
        .then(HandleServerError)
        .catch(HTTPFailedFn)
}

export default foo

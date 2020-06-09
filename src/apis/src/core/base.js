
import request from './request'


const stripSlashes = function (name) {
    return name.replace(/^(\/*)|(\/*)$/g, '')
}

const paramsStringify = function (params) {
    let _str = ''
    for (const o in params) {
        if (o) {
            _str += `${ o }=${ params[o] }&`
        }
    }
    _str = _str.substring(0, _str.length - 1)
    return _str
}

export default class Base {
    constructor (settings = {}) {
        this.name = stripSlashes(settings.name)
        this.options = settings.options || {}
        this.base = `${ settings.base }/${ this.name }`
    }

    makeUrl (params, id) {
        params = params || {}
        let url = this.base

        if (typeof id !== 'undefined' && id !== null) {
            url += `/${ id }`
        }

        if (Object.keys(params).length !== 0) {
            const queryString = paramsStringify(params)

            url += `?${ queryString }`
        }

        return url
    }

    request (options) {
        options.headers = Object.assign({}, this.options.headers, options.headers)
        return request(options)
    }

    find (params = {}) {
        return this.request({
            url: this.makeUrl(params.query),
            method: 'get',
            headers: Object.assign({}, params.headers)
        })
    }

    get (id, params = {}) {
        return this.request({
            url: this.makeUrl(params.query, id),
            method: 'get',
            headers: Object.assign({}, params.headers)
        })
    }

    create (data, params = {}) {
        return this.request({
            url: this.makeUrl(params.query),
            data,
            method: 'post',
            headers: Object.assign({ 'Content-Type': 'application/json' }, params.headers)
        })
    }

    update (id, data, params = {}) {
        if (typeof id === 'undefined') {
            const msg = 'id for \'update\' can not be undefined, only \'null\' when updating multiple entries'
            return Promise.reject(new Error(msg))
        }

        return this.request({
            url: this.makeUrl(params.query, id),
            data,
            method: 'put',
            headers: Object.assign({ 'Content-Type': 'application/json' }, params.headers)
        })
    }

    patch (id, data, params = {}) {
        if (typeof id === 'undefined') {
            const msg = 'id for \'patch\' can not be undefined, only \'null\' when updating multiple entries'
            return Promise.reject(new Error(msg))
        }

        return this.request({
            url: this.makeUrl(params.query, id),
            data,
            method: 'patch',
            headers: Object.assign({ 'Content-Type': 'application/json' }, params.headers)
        })
    }

    remove (id, params = {}) {
        if (typeof id === 'undefined') {
            const msg = 'id for \'remove\' can not be undefined, only \'null\' when removing multiple entries'
            return Promise.reject(new Error(msg))
        }

        return this.request({
            url: this.makeUrl(params.query, id),
            method: 'delete',
            headers: Object.assign({}, params.headers)
        })
    }
}

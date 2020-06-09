
import core from './core'
import config from '../config'

let app = null

class Feathers {
    constructor (notNeed, options = {}) {
        const headers = { 'Content-Type': 'application/json' }
        options.headers = Object.assign({}, options.headers, headers)
        app = app || core(config.api.rootPoint)(options)
        this.rootPoint = config.api.rootPoint
        this.service = app('')
        this.base = this.service.base
        this.request = function (opts) {
            return this.service.request(opts)
        }
    }
}

export default Feathers

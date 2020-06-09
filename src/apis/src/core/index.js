
import base from './base'

export default function (rootPoint = '') {
    const Service = base

    return function (options = {}) {
        const defaultService = function (name) {
            return new Service({
                base: rootPoint,
                name,
                options
            })
        }

        return defaultService
    }
}

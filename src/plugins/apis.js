
import apis from '@/apis'

const $apis = {
    install (vue) {
        vue.prototype.$apis = function (modname) {
            modname = modname || this.modname
            if (!modname || !apis[modname]) {
                /* eslint-disable max-len */
                const msg = 'You must define `modname` for every vue instance which you want to call `this.$apis()`, and must be right'
                throw new Error(msg)
                /* eslint-enable max-len */
            }
            return apis[modname]
        }
    }
}

export default $apis

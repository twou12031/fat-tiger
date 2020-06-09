import Feathers from './feathers'

class PageConfig extends Feathers {
    getPageConfig () {
        return this.request({
            url: `${ this.base }unit/service/settings`
        })
    }
}

export default PageConfig

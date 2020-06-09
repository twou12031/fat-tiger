import Feathers from './feathers'

class User extends Feathers {
    login (data) {
        return this.request({
            url: `${ this.base }/user/login`,
            data,
            method: 'post'
        })
    }

    logout () {
        const url = `${ this.base }user/logout`
        return this.request({
            url
        })
    }

    register (data) {
        return this.request({
            url: `${ this.base }user/register`,
            data,
            method: 'post'
        })
    }

    changePassword (data) {
        return this.request({
            url: `${ this.base }user/ChangePassword`,
            data,
            method: 'post'
        })
    }

    bindCard (data) {
        return this.request({
            url: `${ this.base }Authorization/ReaderCard/Bind`,
            data,
            method: 'post'
        })
    }

    isInUserCollection (resourceid) {
        const url = `${ this.base }user/favorite/id?resourceid=${ resourceid }`
        return this.request({
            url
        })
    }

    addToCollection (data) {
        return this.request({
            url: `${ this.base }user/favorite/add`,
            data,
            method: 'post'
        })
    }

    removeFromCollection (data) {
        return this.request({
            url: `${ this.base }user/favorite/remove`,
            data,
            method: 'post'
        })
    }

    getCollectionLists (pageindex) {
        const url = `${ this.base }magazine/article/favorite?resourcekind=100&pagesize=20&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    isInUserBookCase (query) {
        const { resourceid, year, issue } = query
        let url = `${ this.base }user/favorite/id?resourceid=${ resourceid }`
        if (year) {
            url = `${ this.base }user/favorite/id?resourceid=${
            resourceid }&year=${ year }&issue=${ issue }`
        }
        return this.request({
            url
        })
    }

    addToBookCase (data) {
        return this.request({
            url: `${ this.base }user/favorite/add`,
            data,
            method: 'post'
        })
    }

    removeFromBookCase (data) {
        return this.request({
            url: `${ this.base }user/favorite/remove`,
            data,
            method: 'post'
        })
    }

    getBookCaseLists (resourceName, pageindex = 1) {
        const url = `${ this.base }${ resourceName }/favorite?pagesize=20&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }
}

export default User

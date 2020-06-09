import Feathers from './feathers'

class Magazine extends Feathers {
    getCatesList () {
        return this.request({
            url: `${ this.base }category/GetAllByKind?kind=5`
        })
    }

    getDailyRecommend () {
        return this.request({
            url: `${ this.base }audio/whole/recomm?kind=1&top=8`
        })
    }

    getListByCate (categorycode, pageindex = 1, pagesize = 10) {
        const url = `${ this.base }audio/whole/bycategory?categorycode=${
        categorycode }&pagesize=${ pagesize }&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    searchWord (keyword, pageindex = 1, pagesize = 18) {
        const url = `${ this.base }audio/whole/search?keyword=${
        keyword }&pagesize=${ pagesize }&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    getRankList (kind, top = 10) {
        const url = `${ this.base }audio/whole/rank?kind=${
        kind }&top=${ top }`
        return this.request({
            url
        })
    }

    getLatestList (top = 10) {
        const url = `${ this.base }audio/latest?kind=1&top=${ top }`
        return this.request({
            url
        })
    }

    getDetailInfo (id) {
        const url = `${ this.base }audio/info?id=${
        id }`
        return this.request({
            url
        })
    }

    getCatelog (id) {
        const url = `${ this.base }audio/file/all?id=${
        id }`
        return this.request({
            url
        })
    }

    getSubResUrl (id, sequence = 1) {
        const url = `${ this.base }audio/file/download?id=${
        id }&sequence=${ sequence }`
        return this.request({
            url
        })
    }
}

export default Magazine

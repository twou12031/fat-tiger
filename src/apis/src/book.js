import Feathers from './feathers'

class Book extends Feathers {
    getCatesList () {
        return this.request({
            url: `${ this.base }category/GetAllByKind?kind=3`
        })
    }

    getDailyRecommend () {
        return this.request({
            url: `${ this.base }book/recomm?kind=1&top=4`
        })
    }

    getLatestList (top = 10) {
        return this.request({
            url: `${ this.base }book/latest?top=${ top }`
        })
    }

    getListByCate (categorycode, pageindex = 1, pagesize = 10) {
        const url = `${ this.base }book/bycategory?categorycode=${
        categorycode }&pagesize=${ pagesize }&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    searchWord (keyword, pageindex = 1, pagesize = 18) {
        const url = `${ this.base }book/search?keyword=${
        keyword }&pagesize=${ pagesize }&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    getRankList (kind, top = 10) {
        const url = `${ this.base }book/whole/rank?kind=${
        kind }&top=${ top }`
        return this.request({
            url
        })
    }

    getDetailInfo (id) {
        const url = `${ this.base }book/info?id=${
        id }`
        return this.request({
            url
        })
    }

    getCatelog (id) {
        const url = `${ this.base }book/article/catalog?bookguid=${
        id }`
        return this.request({
            url
        })
    }

    getArticle (articleid, bookguid) {
        const url = `${ this.base }book/article/getfulldetail?bookguid=${
        bookguid }&articleid=${ articleid }`
        return this.request({
            url
        })
    }
}

export default Book

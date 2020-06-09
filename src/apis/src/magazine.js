import Feathers from './feathers'

class Magazine extends Feathers {
    getCatesList () {
        return this.request({
            url: `${ this.base }category/GetAllByKind?kind=2`
        })
    }

    getDailyRecommend () {
        return this.request({
            url: `${ this.base }magazine/recommfull?kind=1&top=4`
        })
    }

    getListByCate (categorycode, pageindex = 1, pagesize = 10) {
        const url = `${ this.base }magazine/bycategory?categorycode=${
        categorycode }&pagesize=${ pagesize }&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    searchWord (keyword, pageindex = 1, pagesize = 18) {
        const url = `${ this.base }magazine/search?keyword=${
        keyword }&pagesize=${ pagesize }&pageindex=${ pageindex }`
        return this.request({
            url
        })
    }

    getRankList (kind, top = 10) {
        const url = `${ this.base }magazine/whole/rank?kind=${
        kind }&top=${ top }`
        return this.request({
            url
        })
    }

    getLatestList (top = 10) {
        const url = `${ this.base }magazine/whole/latest?top=${ top }`
        return this.request({
            url
        })
    }

    getDetailInfo (id, year, issue) {
        const url = `${ this.base }magazine/issue?id=${
        id }&year=${ year }&issue=${ issue }`
        return this.request({
            url
        })
    }

    getCatelog (id, year, issue) {
        const url = `${ this.base }magazine/article/catalog?magazineguid=${
        id }&year=${ year }&issue=${ issue }`
        return this.request({
            url
        })
    }

    getPastMagazines (id) {
        const url = `${ this.base }magazine/issues?id=${
        id }`
        return this.request({
            url
        })
    }

    getPastYears (id) {
        const url = `${ this.base }magazine/years?id=${
        id }`
        return this.request({
            url
        })
    }

    getPastYearIssues (id, year) {
        const url = `${ this.base }magazine/issues?id=${
        id }&year=${ year }`
        return this.request({
            url
        })
    }

    getArticle (articleid) {
        const url = `${ this.base }magazine/article/fulldetail?id=${
        articleid }`
        return this.request({
            url
        })
    }

    getOriginalImgs (id, year, issue, page = 1) {
        const endPage = page + 1
        const url = `${ this.base }magazine/original/ClearImagesURL?id=${
        id }&year=${ year }&issue=${ issue }&startPage=${ page }&endPage=${ endPage }`
        return this.request({
            url
        })
    }

    getOriginalCatelog (id, year, issue, startPage = 1) {
        const endPage = startPage + 20
        const url = `${ this.base }magazine/original/PreviewImagesURL?id=${
        id }&year=${ year }&issue=${ issue }&startPage=${ startPage }&endPage=${ endPage }`
        return this.request({
            url
        })
    }
}

export default Magazine

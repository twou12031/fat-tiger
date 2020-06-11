<template>
    <div class="the-video-view">
        <tabs :tabs="tabs"
              :checked-tab-index="checkedTabIndex"
              @changeTab="tabClickHandler"/>
        <search-filter @changeKeyword="keywordChangeHandler"/>
        <div :class="{'list-on-top': searchVal}"
             class="tab-detail">
            <div v-if="checkedTabIndex === 0"
                 class="detail-body detail-resource">
                <video-list
                    key="0"
                    ref="detailResList"
                    :list="[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1]"/>
            </div>
            <div v-if="checkedTabIndex === 1"
                 class="detail-body detail-gifs">
                <video-list
                    key="1"
                    ref="detailResList"
                    :list="[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1]"/>
            </div>
            <div v-if="checkedTabIndex === 2"
                 class="detail-body detail-upload">
                <button class="upload-btn">上传图片或视频</button>
                <video-list
                    key="2"
                    ref="detailResList"
                    :list="[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1]"/>
            </div>
            <div v-if="checkedTabIndex === 3"
                 class="detail-body detail-recent">
                <video-list
                    key="3"
                    ref="detailResList"
                    :list="[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1]"/>
            </div>
            <div v-if="checkedTabIndex === 4"
                 class="detail-body detail-collection">
                <video-list
                    key="4"
                    ref="detailResList"
                    :list="[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                            1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1]"/>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Tabs from './common/tabs'
    import SearchFilter from './common/search-filter'
    import VideoList from './common/video-list'

    export default {
        components: {
            Tabs,
            VideoList,
            SearchFilter
        },
        props: {
        },
        data () {
            return {
                checkedTabIndex: 2,
                tabs: [
                    {
                        name: '资源',
                        icon: ''
                    }, {
                        name: 'GIFs',
                        icon: ''
                    }, {
                        name: '上传',
                        icon: ''
                    }, {
                        name: '最近使用',
                        icon: ''
                    }, {
                        name: '收藏',
                        icon: ''
                    }
                ],
                searchVal: '',
                keywordsBscroll: undefined
            }
        },
        computed: {
        },
        watch: {
            searchVal (newVal, oldVal) {
                if (newVal === '' || oldVal === '') {
                    const { detailResList } = this.$refs
                    detailResList.initBScroll()
                }
            }
        },
        mounted () {
            this.initKeywordsListBScroll()
        },
        methods: {
            tabClickHandler (index) {
                if (this.checkedTabIndex === index) {
                    return
                }
                this.checkedTabIndex = index
            },
            keywordChangeHandler (val) {
                console.log(val)
                this.searchVal = val
            },
            initKeywordsListBScroll () {
                this.$nextTick(() => {
                    if (this.keywordsBscroll) {
                        this.keywordsBscroll.refresh()
                        return
                    }
                    const { keywordsListWrap } = this.$refs
                    if (!keywordsListWrap) {
                        return
                    }
                    this.keywordsBscroll = new BScroll(keywordsListWrap, {
                        scrollX: true,
                        scrollY: false,
                        bounce: false,
                        click: true,
                        tap: true,
                        momentum: false,
                        probeType: 3,
                        preventDefault: false
                    })
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next()
        }
    }
</script>

<style lang="scss" scoped>
    .the-video-view {
        width: 100%;
        height: calc(100vh - 100px);
        box-sizing: border-box;
        padding: 50px 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .tabs-mask {
        width: 510px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #F2F2F2;
    }

    .tab-item {
        width: 102px;
        height: 28px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(165,165,165,1);
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        position: relative;
        transition:  all .3s;

        &:hover {
            color: #3B3646;
        }

        &:after {
            position: absolute;
            left: 50%;
            bottom: -12px;
            margin-left: 0;
            font-size: 0;
            width: 0;
            height: 4px;
            background: rgba(228,182,99,1);
            border-radius: 2px;
            transition:  all .3s;
        }
    }

    .actived-tab {
        color: #3B3646;

        &:after {
            width: 20px;
            margin-left: -10px;
        }
    }

    .header {
        width: 510px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        img {
            width: 26px;
            height: 26px;
            padding: 12px 27px;
            background: #3B3646;
        }
    }

    .search-mask {
        width: 380px;
        box-sizing: border-box;
        background: rgba(255,255,255,1);
        border-radius: 50px;
        overflow: hidden;
        border: 1px solid rgba(223,223,223,1);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        input {
            width: 390px;
            height: 50px;
            padding: 0 8px;
            font-size: 20px;
            font-family: PingFangSC-Light,PingFang SC;
            font-weight: 300;
            color: #191C3D;

            &::-webkit-input-placeholder {
                color: #A5A5A5;
            }
            &:-moz-placeholder {
                color: #A5A5A5;
            }
            &::-moz-placeholder {
                color: #A5A5A5;
            }
            &:-ms-input-placeholder {
                color: #A5A5A5;
            }
        }
    }

    .keywords-list-wrap {
        width: 510px;
        max-height: 0;
        overflow: hidden;
        transition: all .2s;
    }

    .show-keyword-list {
        margin-top: 10px;
        max-height: 34px;
    }

    .keywords-list {
        width: fit-content;
        height: 34px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .keyword-item {
            width: 83px;
            height: 20px;
            border-radius: 20px;
            padding: 6px 9px 8px 33px;
            font-size: 14px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(165,165,165,1);
            line-height: 20px;
            background: #F2F2F2;
            margin-right: 10px;
            overflow: hidden;
            cursor: pointer;

            &:last-child {
                margin-right: 0;
            }

            &:hover {
                background: #2E3341;
                color: #FBFBFB;
            }
        }
    }

    .tab-detail {
        width: 100%;
        padding-top: 10px;
        box-sizing: border-box;
        height: calc(100% - 39px - 20px - 52px);
    }

    .list-on-top {
        height: calc(100% - 39px - 20px - 52px - 10px - 34px);
    }

    .detail-body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .res-list-wrap {
            height: 100%;
        }
    }

    .detail-upload {

        .upload-btn {
            width: 220px;
            height: 50px;
            background: rgba(219,177,101,1);
            border-radius: 45px;
            margin: 30px auto 20px;
            font-size: 18px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(255,255,255,1);
        }

        .res-list-wrap {
            height: calc(100% - 100px);
        }
    }
</style>

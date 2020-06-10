<template>
    <div class="the-video-view">
        <div class="tabs-mask">
            <div v-for="(item,index) in tabs"
                 :key="index"
                 :class="{'actived-tab': checkedTabIndex === index}"
                 class="tab-item"
                 @click="tabClick(index)">
                {{ item.name }}
            </div>
        </div>
        <div class="header">
            <div class="search-mask">
                <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <input v-model="searchVal"
                       type="search"
                       placeholder="视频和图片搜索">
            </div>
            <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        </div>
        <div ref="keywordsListWrap"
             :class="{'show-keyword-list': searchVal }"
             class="keywords-list-wrap">
            <div class="keywords-list">
                <div v-for="(item,index) in 10"
                     :key="index"
                     class="keyword-item">
                    {{ String.fromCharCode((64+item)) }}
                </div>
            </div>
        </div>
        <div :class="{'list-on-top': searchVal}"
             class="tab-detail">
            <div v-if="checkedTabIndex === 0"
                 class="detail-resource">
                <res-list :list="[1,1,1,1,1,1,1,1,1,1,1,1,]"/>
            </div>
            <div v-if="checkedTabIndex === 1"
                 class="detail-gifs">
                GIFs
            </div>
            <div v-if="checkedTabIndex === 2"
                 class="detail-upload">
                上传
            </div>
            <div v-if="checkedTabIndex === 3"
                 class="detail-recent">
                最近使用
            </div>
            <div v-if="checkedTabIndex === 4"
                 class="detail-collection">
                收藏
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import ResList from './res-list'

    export default {
        components: {
            ResList
        },
        props: {
        },
        data () {
            return {
                checkedTabIndex: 0,
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
        mounted () {
            this.initKeywordsListBScroll()
        },
        methods: {
            tabClick (index) {
                if (this.checkedTabIndex === index) {
                    return
                }
                this.checkedTabIndex = index
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
        width: 20%;
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
        width: 420px;
        box-sizing: border-box;
        background: rgba(255,255,255,1);
        border-radius: 10px;
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
        width: 100%;
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
            padding: 6px 9px 8px 33px;
            font-size: 14px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(165,165,165,1);
            line-height: 20px;
            background: #F2F2F2;
            margin-right: 10px;
            overflow: hidden;

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

    .detail-resource {
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
</style>

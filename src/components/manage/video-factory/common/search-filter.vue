<template>
    <div class="search-filter-com">
        <div class="search-filter">
            <div class="search-mask">
                <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <input v-model="searchVal"
                       type="search"
                       placeholder="视频和图片搜索">
            </div>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
            </el-select>
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
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        components: {
        },
        props: {
        },
        data () {
            return {
                searchVal: '',
                value: '',
                options: [],
                keywordsBscroll: undefined
            }
        },
        computed: {
        },
        watch: {
            searchVal (newVal) {
                this.$emit('changeKeyword', newVal)
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
    .search-filter-com {
        width: auto;
        margin-top: 20px;
    }

    .search-filter {
        width: 510px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img {
            width: 26px;
            height: 26px;
            padding: 12px 27px;
            background: #3B3646;
        }
    }

    .search-mask {
        width: 340px;
        box-sizing: border-box;
        background: rgba(255,255,255,1);
        border-radius: 25px;
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
</style>

<style lang="scss">
    .search-filter-com {

        .el-input__inner {
            width: 140px !important;
            height: 50px !important;
            box-sizing: border-box !important;
            padding: 0 20px !important;
            border-radius: 25px !important;
            font-size: 14px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(46,51,65,1);
        }

        .el-select__caret {
            height: 50px !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .el-color-picker {
            height: 50px !important;
        }

        .el-color-picker__trigger {
            width: 140px !important;
            height: 50px !important;
        }
    }

    .el-select-dropdown__item {
        font-size: 14px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(46,51,65,1);
    }
</style>

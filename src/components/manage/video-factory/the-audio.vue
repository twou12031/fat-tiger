<template>
    <div class="the-audio-view">
        <tabs :tabs="tabs"
              :checked-tab-index="checkedTabIndex"
              @changeTab="tabClickHandler"/>
        <div v-show="checkedTabIndex !== 2">
            <search-filter @changeKeyword="keywordChangeHandler"/>
        </div>
        <div class="tab-detail">
            <div v-if="checkedTabIndex === 0"
                 class="detail-body detail-resource">
                <div class="checked-bgm">
                    123
                </div>
                <div class="bgm-list">
                    <div class="bgm-volume-mask">
                        <div class="bgm-volume">
                            <p>配乐音量</p>
                            <div class="slider-mask">
                                小
                                <el-slider v-model="bgmVolume"/>
                                大
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="checkedTabIndex === 1"
                 class="detail-body detail-upload">
                upload
            </div>
            <div v-if="checkedTabIndex === 2"
                 class="detail-body detail-voice">
                <p class="detail-body-title">语音配置</p>
                <div class="opt-list">
                    <div class="opt-item">
                        <p>突出字体字重</p>
                        <button class="try-listen-btn">试听</button>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"/>
                        </el-select>
                    </div>
                    <div class="opt-item">
                        <p>配音语速度</p>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"/>
                        </el-select>
                    </div>
                    <div class="opt-item">
                        <p>配音音量</p>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"/>
                        </el-select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from './common/tabs'
    import SearchFilter from './common/search-filter'

    export default {
        components: {
            Tabs,
            SearchFilter
        },
        props: {
        },
        data () {
            return {
                checkedTabIndex: 0,
                tabs: [
                    {
                        name: '音乐库',
                        icon: ''
                    }, {
                        name: '上传',
                        icon: ''
                    }, {
                        name: '配音',
                        icon: ''
                    }
                ],
                searchVal: '',
                value: '',
                bgmVolume: 0
            }
        },
        computed: {
        },
        watch: {
        },
        mounted () {
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
            }
        },
        beforeRouteEnter (to, from, next) {
            next()
        }
    }
</script>

<style lang="scss" scoped>
    .the-audio-view {
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
        justify-content: center;
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

    .detail-resource {
        width: 100%;

        .checked-bgm {
            width: 510px;
            height: 100px;
            background: rgba(248,250,253,1);
            border-radius: 10px;
            border: 2px solid rgba(223,223,223,1);
            margin: 20px auto;
        }

        .bgm-list {
            width: 100%;
        }

        .bgm-volume-mask {
            width: 100%;
            box-shadow: 0px 1px 8px 0px rgba(223,223,223,0.3);
        }

        .bgm-volume {
            width: 510px;
            height: 82px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            p {
                font-size: 16px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(46,51,65,1);
                line-height: 22px;
            }
        }

        .slider-mask {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(165,165,165,1);
            line-height: 17px;
        }
    }

    .detail-voice {
        width: 510px;
        height: 232px;
        box-sizing: border-box;
        padding: 20px 34px;
        background: rgba(248,250,253,1);
        border-radius: 4px;
        margin: 20px auto;

        .opt-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 14px;

            .opt-item {
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                position: relative;

                p {
                    font-size: 16px;
                    font-family: PingFangSC-Regular,PingFang SC;
                    font-weight: 400;
                    color: rgba(46,51,65,1);
                    line-height: 22px;
                }

                .try-listen-btn {
                    position: absolute;
                    left: 230px;
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(0,97,255,1);
                    line-height:22px;
                }
            }
        }
    }

    .detail-body-title {
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(46,51,65,1);
        line-height: 25px;
        position: relative;

        &:before {
            position: absolute;
            left: -11px;
            top: 6px;
            font-size: 0;
            width: 4px;
            height: 12px;
            background: rgba(46,51,65,1);
            border-radius: 2px;
        }
    }
</style>

<style lang="scss">
    .opt-item {

        .el-input__inner {
            width: 160px !important;
            height: 40px !important;
            padding: 0 10px !important;
            font-size: 14px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(46,51,65,1);
            border: none !important;
        }

        .el-select__caret {
            height: 40px !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .el-color-picker {
            height: 40px !important;
        }

        .el-color-picker__trigger {
            width: 160px !important;
            height: 40px !important;
        }
    }

    .el-select-dropdown__item {
        font-size: 14px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(46,51,65,1);
    }
    .bgm-volume {

        .el-slider {
            width: 160px !important;
            margin: 0 14px;
        }

        .el-slider__runway {
            width: 160px !important;
            height: 8px !important;
        }

        .el-slider__bar {
            height: 8px !important;
            background: rgba(219,177,101,1);
        }

        .el-tooltip {
            width: 20px !important;
            height: 20px !important;
            border-radius: 50%;
            box-sizing: border-box;
            background: rgba(255,255,255,1);
            border: 4px solid rgba(219,177,101,1);
        }
    }
</style>

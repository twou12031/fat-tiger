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
                    <div v-if="!checkedBgmItem" class="empty-bgm">
                        单击您要添加的曲目
                    </div>
                    <div v-else class="checked-bgm-detail">
                        <img class="status-icon" src="https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=1">
                        <div class="res-summary-mask">
                            <h6 class="text1line">Tarnished</h6>
                            <p class="text1line">indie . rock</p>
                        </div>
                        <img class="wavez-icon" src="https://images.pexels.com/photos/3860667/pexels-photo-3860667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                        <b class="current-time">0:00</b>
                        <b class="bgm-duration">0:56</b>
                        <img class="cancel-check-icon"
                             src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                             @click="checkedBgmItem = undefined">
                    </div>
                </div>
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
                <bgm-list :list="[1,1,1,1,1,1,1]"
                          @checkBgm="checkbgmHandler"/>
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
                        <div class="slider-mask">
                            小
                            <el-slider v-model="bgmVolume"/>
                            大
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from './common/tabs'
    import SearchFilter from './common/search-filter'
    import BgmList from './common/bgm-list'

    export default {
        components: {
            Tabs,
            SearchFilter,
            BgmList
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
                bgmVolume: 50,
                checkedBgmItem: undefined
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
            },
            checkbgmHandler (item) {
                this.checkedBgmItem = item
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

        .checked-bgm {
            width: 510px;
            height: 100px;
            margin: 20px auto;

            .empty-bgm {
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 96px;
                background: rgba(248,250,253,1);
                border-radius: 10px;
                border: 2px dashed rgba(223,223,223,1);
            }

            .checked-bgm-detail {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 0 30px;
                background: rgba(248,250,253,1);
                border-radius: 10px;
                border: 1px solid rgba(219,177,101,1);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                position: relative;

                .status-icon {
                    width: 46px;
                    height: 46px;
                    background: rgba(160,171,191,1);
                    border-radius: 50%;
                }

                .res-summary-mask {
                    width: 180px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;

                    h6 {
                        width: 100%;
                        height: 28px;
                        font-size: 20px;
                        font-family: PingFangSC-Medium,PingFang SC;
                        font-weight: 500;
                        color: rgba(46,51,65,1);
                        line-height: 28px;
                    }

                    p {
                        width: 100%;
                        height: 28px;
                        font-size: 20px;
                        font-family: PingFangSC-Light,PingFang SC;
                        font-weight: 300;
                        color: rgba(165,165,165,1);
                        line-height: 28px;
                    }
                }

                .wavez-icon {
                    width: 125px;
                    height: 59px;
                }

                b {
                    display: block;
                    font-size: 12px;
                    font-family: PingFangSC-Regular,PingFang SC;
                    font-weight: 400;
                    color: rgba(102,102,102,1);
                    line-height: 17px;
                    position: absolute;
                    bottom: 3px;
                }

                .bgm-duration {
                    right: 30px;
                }

                .current-time {
                    left: 355px;
                }

                .cancel-check-icon {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    top: -10px;
                    right: -10px;
                    cursor: pointer;
                }
            }
        }

        .bgm-volume-mask {
            width: 100%;
            box-shadow: 0px 1px 8px 2px rgba(223,223,223,0.3);
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

        .res-list-wrap {
            height: calc(100% - 222px - 20px);
            margin-top: 20px;
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

                .slider-mask {
                    margin-right: -26px;
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
            box-shadow: 0 0 11px 1px rgba(0,0,0,.1);
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

    .bgm-volume,.opt-item {

        .el-slider {
            width: 160px !important;
            margin: 0 14px;
        }

        .el-slider__runway {
            width: 160px !important;
            height: 8px !important;
            background: #A0ABBF;
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

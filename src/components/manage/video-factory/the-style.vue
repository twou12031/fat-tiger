<template>
    <div class="the-style-view">
        <div class="settings-header">
            <h5>
                品牌预设
                <el-tooltip :hide-after="0"
                            popper-class="settings-tip"
                            content="水印将显示在你的视频中"
                            placement="right">
                    <img class="tip-icon" src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </el-tooltip>
            </h5>
        </div>
        <div ref="settingsListWrap" class="settings-list-wrap">
            <div class="user-settings-list">
                <div v-for="(item,index) in 10"
                     :key="index"
                     class="style-settings-item">
                    <img src="https://images.pexels.com/photos/2249602/pexels-photo-2249602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    <p>
                        我的品牌
                        <br>
                        #1
                    </p>
                </div>
            </div>
        </div>
        <div class="cutline"/>
        <div ref="settingsContentWrap" class="settings-content-wrap">
            <div class="settings-content">
                <div class="settings-header">
                    <h5>
                        水印
                        <el-tooltip :hide-after="0"
                                    popper-class="settings-tip"
                                    content="水印将显示在你的视频中"
                                    placement="right">
                            <img class="tip-icon" src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                        </el-tooltip>
                    </h5>
                    <div class="settings-val">
                        <img class="vip-icon" src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                        <el-switch v-model="form.waterMark"
                                   active-color="#E2B461"
                                   inactive-color="#E8E8E8"/>
                    </div>
                </div>
                <div class="cutline"/>
                <div class="settings-header">
                    <h5>外观</h5>
                </div>
                <div class="settings-section">
                    <div class="look-mask">
                        <div class="look-content">
                            <img src="">
                        </div>
                        <div class="look-tabs">
                            <img src="">
                            <img src="">
                            <img src="">
                            <img src="">
                            <img src="">
                        </div>
                    </div>
                    <button class="look-more-btn">选择更多主题</button>
                </div>
                <div class="cutline"/>
                <div class="settings-header">
                    <h5>
                        风格
                    </h5>
                </div>
                <div class="settings-section">
                    <div class="vip-link">
                        VIP提供定制主题服务。查看升级选项
                        <span>></span>
                    </div>
                    <div class="settings-detail">
                        <div class="settings-header">
                            <h5>字体样式</h5>
                        </div>
                        <div class="detail-group">
                            <div class="detail-item">
                                <p>字体</p>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"/>
                                </el-select>
                            </div>
                            <div class="detail-item">
                                <p>字重</p>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"/>
                                </el-select>
                            </div>
                            <div class="detail-item">
                                <p>字体颜色</p>
                                <el-color-picker v-model="color1"/>
                            </div>
                            <div class="detail-item">
                                <p>
                                    突出字体颜色
                                    <el-tooltip :hide-after="0"
                                                popper-class="settings-tip"
                                                content="水印将显示在你的视频中"
                                                placement="right">
                                        <img class="tip-icon" src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                    </el-tooltip>
                                </p>
                                <el-color-picker v-model="color1"/>
                            </div>
                            <div class="detail-item">
                                <p>突出字体字重</p>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"/>
                                </el-select>
                            </div>
                            <div class="detail-item">
                                <p>
                                    文本背景颜色
                                    <el-tooltip :hide-after="0"
                                                popper-class="settings-tip"
                                                content="水印将显示在你的视频中"
                                                placement="right">
                                        <img class="tip-icon" src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                    </el-tooltip>
                                </p>
                                <el-color-picker v-model="color1"/>
                            </div>
                        </div>
                    </div>
                    <div class="settings-detail">
                        <div class="settings-header">
                            <h5>字幕样式</h5>
                        </div>
                        <div class="detail-group">
                            <div class="detail-item">
                                <p>字体</p>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"/>
                                </el-select>
                            </div>
                            <div class="detail-item">
                                <p>字体颜色</p>
                                <el-color-picker v-model="color1"/>
                            </div>
                            <div class="detail-item">
                                <p>
                                    标签突出
                                </p>
                                <el-color-picker v-model="color1"/>
                            </div>
                            <div class="detail-item">
                                <p>
                                    字体背景
                                    <el-tooltip :hide-after="0"
                                                popper-class="settings-tip"
                                                content="水印将显示在你的视频中"
                                                placement="right">
                                        <img class="tip-icon" src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                    </el-tooltip>
                                </p>
                                <el-color-picker v-model="color1"/>
                            </div>
                        </div>
                    </div>
                    <div class="settings-detail">
                        <div class="settings-header">
                            <h5>背景风格</h5>
                        </div>
                        <div class="detail-group">
                            <div class="detail-item">
                                <p>原色</p>
                                <el-color-picker v-model="color1"/>
                            </div>
                            <div class="detail-item">
                                <p>辅助颜色</p>
                                <el-color-picker v-model="color1"/>
                            </div>
                        </div>
                    </div>
                    <div class="settings-detail">
                        <div class="settings-header">
                            <h5>转换场景</h5>
                        </div>
                        <div class="detail-group">
                            <div class="detail-item">
                                <p>可实现</p>
                                <div class="settings-val">
                                    <el-switch v-model="form.waterMark"
                                               active-color="#E2B461"
                                               inactive-color="#E8E8E8"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cutline style-settings-cutline"/>
                <div class="settings-header">
                    <h5>
                        滤镜
                    </h5>
                </div>
                <div class="settings-section">
                    <div class="filter-cate-list">
                        <div v-for="(item,index) in 14"
                             :key="index"
                             class="filter-cate-item">
                            {{ parseInt((Math.random()*1000 - 500)) }}
                        </div>
                    </div>
                    <div class="filter-review-list">
                        <div v-for="(item,index) in 14"
                             :key="index"
                             class="filter-review-item"
                        >
                            <img class="cover" src="https://images.pexels.com/photos/749114/pexels-photo-749114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                            <p class="free-corner">免费</p>
                            <img class="collection-icon" src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                        </div>
                    </div>
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
                settingListBscroll: '',
                contentBscroll: '',
                form: {},
                value: '',
                color1: '',
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ]
            }
        },
        computed: {
        },
        mounted () {
            this.initSettingsListBScroll()
            this.initContentBScroll()
        },
        methods: {
            initSettingsListBScroll () {
                this.$nextTick(() => {
                    if (this.settingListBscroll) {
                        this.settingListBscroll.refresh()
                        return
                    }
                    const { settingsListWrap } = this.$refs
                    if (!settingsListWrap) {
                        return
                    }
                    this.settingListBscroll = new BScroll(settingsListWrap, {
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
            },
            initContentBScroll () {
                this.$nextTick(() => {
                    if (this.contentBscroll) {
                        this.contentBscroll.refresh()
                        return
                    }
                    const { settingsContentWrap } = this.$refs
                    if (!settingsContentWrap) {
                        return
                    }
                    this.contentBscroll = new BScroll(settingsContentWrap, {
                        bounce: false,
                        click: true,
                        tap: true,
                        momentum: false,
                        probeType: 3,
                        mouseWheel: {
                            speed: 20,
                            invert: false,
                            easeTime: 0
                        },
                        scrollbar: {
                            fade: false,
                            interactive: true // 1.8.0 新增
                        },
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
    .the-style-view {
        width: 100%;
        height: calc(100vh - 100px);
        box-sizing: border-box;
        padding: 0 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .settings-header {
        width: 510px;
        height: 98px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h5 {
            padding-left: 14px;
            font-size: 20px;
            font-family: PingFangSC-Semibold,PingFang SC;
            font-weight: 600;
            color: rgba(25,28,61,1);
            line-height: 28px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            &::after {
                font-size: 0;
                background: #191c3d;
                width: 4px;
                height: 12px;
                border-radius: 12px;
                position: absolute;
                left: 0;
                top: 6px;
            }
        }
    }

    .tip-icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgba(165,165,165,1);
        cursor: pointer;
        margin-left: 10px;
    }

    .settings-val {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .vip-icon {
            width: 40px;
            height: 19px;
            background: rgba(226,180,97,1);
            border-radius: 4px;
            margin-right: 10px;
        }
    }

    .settings-list-wrap {
        width: 510px;
        height: 190px;
        overflow: hidden;
    }

    .user-settings-list {
        width: fit-content;
        height: 190px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .style-settings-item {
        width: 80px;
        height: 100%;
        box-sizing: border-box;
        padding: 30px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-right: 40px;

        &:last-child {
            margin-right: 0;
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            cursor: pointer;
        }

        p {
            width: 100%;
            text-align: center;
            height: 40px;
            font-size: 14px;
            font-family: PingFangSC-Light,PingFang SC;
            font-weight: 300;
            color: rgba(46,51,65,1);
            line-height: 20px;
            cursor: pointer;
        }
    }

    .settings-content-wrap {
        width: 100%;
        height: calc(100% - 288px);
        overflow: hidden;
        position: relative;
    }

    .settings-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .look-mask {
        width: 510px;

        .look-content {

            img {
                width: 510px;
                height: 235px;
            }

        }

        .look-tabs {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;

            img {
                background: yellowgreen;
                width: 94px;
                height: 52px;
            }
        }
    }

    .look-more-btn {
        display: block;
        margin: 28px auto 30px;
        width: 168px;
        height: 50px;
        background: rgba(255,255,255,1);
        box-shadow: 0px 0px 30px 0px rgba(232,232,232,0.5);
        border-radius: 45px;
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(46,51,65,1);
    }

    .vip-link {
        width: 510px;
        height: 60px;
        box-sizing: border-box;
        padding: 0 20px;
        margin: 0 auto;
        background: rgba(226,180,97,1);
        border-radius: 4px;
        font-size: 20px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(255,255,255,1);
        line-height: 60px;

        span {
            float: right;
        }
    }

    .settings-detail {
        width: 510px;
        box-sizing: border-box;
        padding: 20px;
        margin: 10px auto 0;
        border-radius: 4px;
        background: #f8fafd;

        .settings-header {
            height: 25px;
            padding-top: 0;

            h5 {
                line-height: 25px;
            }
        }
    }

    .detail-group {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 0 34px;

        .detail-item {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 50px;

            p {
                font-size: 16px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(46,51,65,1);
                line-height: 22px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }
        }
    }

    .filter-cate-list {
        width: 520px;
        margin-left: 5px;
    }

    .filter-cate-item {
        padding: 7px 20px;
        border-radius: 17px;
        font-size: 14px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(165,165,165,1);
        line-height: 20px;
        float: left;
        margin: 0 10px 10px 0;
        background: #F2F2F2;
        cursor: pointer;
        transition: all .3s;

        &:hover {
            background: #2E3341;
            color: #FBFBFB;
        }
    }

    .filter-review-list {
        width: 510px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        clear: both;
    }

    .filter-review-item {
        margin-top: 10px;
        width: 250px;
        height: 139px;
        box-sizing: border-box;
        border: 2px solid transparent;
        cursor: pointer;
        position: relative;
        transition: all .3s;

        &:hover {
            border: 2px solid rgba(219,177,101,1);
        }

        .cover {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }

        .free-corner {
            position: absolute;
            left: 10px;
            top: 10px;
            padding: 1px 7px;
            background: rgba(25,28,61,0.7);
            border-radius: 4px;
            font-size: 12px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(255,255,255,1);
            line-height: 17px;
        }

        .collection-icon {
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 20px;
            height: 20px;
            background: rgba(255,255,255,1);
        }
    }

    .cutline {
        width: 550px;
        height: 10px;
        background: rgba(248,250,253,1);
    }

    .style-settings-cutline {
        margin-top: 30px;
    }
</style>

<style lang="scss">
    .settings-tip {
        background: rgba(25,28,61,1) !important;
        color: red !important;
        font-size: 12px !important;
        font-family: PingFangSC-Light,PingFang SC !important;
        font-weight: 300 !important;
        color: rgba(255,255,255,1) !important;
    }

    .settings-val .el-switch__core {
        width: 60px !important;
        height: 30px !important;
        border-radius: 15px;
        box-sizing: border-box;

        &:after {
            top: 0px !important;
            font-size: 0;
            width: 27px !important;
            height: 27px !important;
        }
    }

    .el-switch.is-checked .el-switch__core {

        &:after {
            margin-left: -28px !important;
        }
    }

    .detail-item {

        .el-input__inner {
            width: 160px !important;
            height: 40px !important;
            padding: 0 10px !important;
            font-size: 14px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(46,51,65,1);
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
</style>

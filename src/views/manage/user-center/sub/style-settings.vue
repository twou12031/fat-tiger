<template>
    <div class="style-settings-view">
        <div class="header">
            <h5 class="router-view-title">
                品牌预设
            </h5>
            <h6 class="title-supplement">
                在此处保存不同品牌和活动的品牌预设，您可以在创建视频时选择
            </h6>
        </div>
        <div class="settings-content">
            <div class="content-section list-section">
                <div class="settings-list">
                    <div v-for="(item,index) in settingsList"
                         :key="index"
                         :class="{'checked-settings': checkedSettingsIndex === index}"
                         class="settings-item"
                         @click="checkedSettingsIndex = index">
                        <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                        <p>我的品牌预设 #{{ index+1 }}</p>
                    </div>
                </div>
                <button class="add-new-btn">+ 添加新的品牌预设</button>
            </div>
            <div class="content-section">
                <div class="settings-mode">
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
                </div>
                <div class="settings-mode">
                    <div class="settings-header">
                        <h5>
                            风格
                        </h5>
                    </div>
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
            </div>
            <div class="content-section">
                <div class="settings-mode">
                    <div class="settings-header">
                        <h5>外观</h5>
                        <button class="look-more-btn">查看更多</button>
                    </div>
                    <div class="settings-look-tabs">
                        <img src="">
                        <img src="">
                        <img src="">
                        <img src="">
                        <img src="">
                    </div>
                    <div class="settings-look-content">
                        <img src="">
                        <div class="img-group">
                            <img src="" alt="">
                            <div class="img-group-sub">
                                <img src="" alt="">
                                <img src="" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="add-end-video">
                    +收尾视频
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                settingsList: [
                    {}, {}, {}, {}, {}, {}
                ],
                checkedSettingsIndex: 0,
                form: {

                },
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
        }
    }
</script>

<style lang="scss" scoped>
    .style-settings-view {
        width: 100%;
    }

    .settings-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .content-section {
        min-height: calc(100vh - 222px - 50px);
        background: rgba(255,255,255,1);
        box-shadow: 0px 0px 0px 1px rgba(232,232,232,0.5);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &:nth-child(1) {
            width: 425px;
            justify-content: space-between;

            .settings-list {
                width: 100%;
            }

            .settings-item {
                width: 100%;
                height: 120px;
                background: rgba(246,248,251,1);
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 10px;
                cursor: pointer;
                box-sizing: border-box;
                border-left: 4px solid transparent;

                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    margin: 0 20px 0 26px;
                }

                p {
                    font-size: 20px;
                    font-family: PingFangSC-Semibold,PingFang SC;
                    font-weight: 600;
                    color: rgba(25,28,61,1);
                    line-height: 28px;
                }
            }

            .checked-settings {
                border-left: 4px solid #191C3D;
            }

            .add-new-btn {
                width: 100%;
                height: 80px;
                background: rgba(219,177,101,1);
                font-size: 20px;
                font-family: PingFangSC-Semibold,PingFang SC;
                font-weight: 600;
                color: rgba(255,255,255,1);
            }
        }

        &:nth-child(2) {
            width: 590px;
            box-sizing: border-box;
            padding: 0 40px 20px;
        }

        &:nth-child(3) {
            width: 570px;
            box-sizing: border-box;
            padding: 0 30px 20px;
        }

        .settings-mode {
            width: 100%;
        }

        .settings-header {
            height: 98px;
            box-sizing: border-box;
            padding-top: 10px;
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

        .look-more-btn {
            font-size: 20px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(165,165,165,1);
            line-height: 28px;
        }

        .tip-icon {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: rgba(165,165,165,1);
            cursor: pointer;
            margin-left: 10px;
        }

        .settings-look-tabs {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            img {
                background: yellowgreen;
                width: 94px;
                height: 52px;
            }
        }

        .settings-look-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 10px;

            img {
                background: rebeccapurple;
                width: 510px;
                height: 235px;
            }

            .img-group {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                width: 510px;
                margin-top: 10px;

                img {
                    width: 250px;
                    height: 400px;
                }

                .img-group-sub {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;

                    img {

                        &:nth-child(1) {
                            width: 250px;
                            height: 250px;
                        }

                        &:nth-child(2) {
                            width: 250px;
                            height: 140px;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }

        .add-end-video {
            width: 100%;
            height: 134px;
            margin-top: 10px;
            font-size: 18px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(46,51,65,1);
        }
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

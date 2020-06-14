<template>
    <div class="the-format-view">
        <div class="header">
            <p class="detail-body-title">视频分辨率</p>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
            </el-select>
        </div>
        <div class="list-wrap">
            <format-list :list="[1,1,1,1,1]"/>
        </div>
    </div>
</template>

<script>
    import FormatList from './common/format-list'

    export default {
        components: {
            FormatList
        },
        props: {
        },
        data () {
            return {
                value: '',
                options: [
                    {
                        value: 1,
                        label: '480 SD'
                    }, {
                        value: 2,
                        label: '720 HD'
                    }, {
                        value: 3,
                        label: '1080P HD'
                    }
                ]
            }
        },
        computed: {
        },
        mounted () {
        },
        methods: {
        },
        beforeRouteEnter (to, from, next) {
            next()
        }
    }
</script>

<style lang="scss" scoped>
    .the-format-view {
        width: 100%;
        height: calc(100vh - 100px);
        box-sizing: border-box;
        padding: 50px 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .header {
        width: 510px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .detail-body-title {
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(25,28,61,1);
        line-height: 25px;
        position: relative;
        font-weight: 600;

        &:before {
            position: absolute;
            left: -11px;
            top: 6px;
            font-size: 0;
            width: 4px;
            height: 12px;
            background: rgba(25,28,61,1);
            border-radius: 2px;
        }
    }

    .list-wrap {
        width: 100%;
        margin-top: 50px;
        height: calc(100% - 90px);

        .format-list-wrap {
            height: 100%;
        }
    }
</style>


<style lang="scss">
    .the-format-view {

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
</style>

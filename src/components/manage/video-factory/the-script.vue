<template>
    <div class="the-script-view">
        <h5 class="header">
            视频内容
        </h5>
        <div class="rich-editor-mask">
            123
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
        },
        data () {
            return {}
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
    .the-script-view {
        width: 100%;
        box-sizing: border-box;
        padding: 50px 30px 50px 34px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .header {
        margin-left: 6px;
        padding-left: 14px;
        font-size: 20px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: rgba(46,51,65,1);
        line-height: 28px;
        position: relative;

        &::after {
            font-size: 0;
            background: #191c3d;
            width: 4px;
            height: 12px;
            border-radius: 12px;
            position: absolute;
            left: 0;
            top: 8px;
        }
    }

    .rich-editor-mask {
        width: 510px;
        min-height: calc(100vh - 100px - 100px - 28px - 20px);
        margin-top: 20px;
        box-sizing: border-box;
        background: rgba(255,255,255,1);
        border-radius: 6px;
        border: 1px solid rgba(232,232,232,0.5);
        align-self: flex-end;
    }
</style>

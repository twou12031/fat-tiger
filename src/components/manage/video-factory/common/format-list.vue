<template>
    <div ref="formatListWrap" class="format-list-wrap">
        <div class="format-group-mask">
            <div v-for="(item,index) in list"
                 :key="index"
                 class="format-group">
                <div class="header">
                    <img src="https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    <p>今日头条</p>
                </div>
                <div class="format-list">
                    <div v-for="(sub,i) in 4"
                         :key="i"
                         class="format-item">
                        <div class="cover-mask">
                            <img v-if="i === 1" src="https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=1">
                            <img v-else src="https://images.pexels.com/photos/64296/pexels-photo-64296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                        </div>
                        <div class="text-info-mask">
                            <p class="text1line">动态资讯</p>
                            <span>比例:16:9    时长:60s</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 需在父组件css中明确wrap高度
    import BScroll from 'better-scroll'

    export default {
        components: {
        },
        props: {
            list: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                bscroll: undefined
            }
        },
        computed: {
        },
        mounted () {
            this.initBScroll()
        },
        methods: {
            initBScroll () {
                this.$nextTick(() => {
                    if (this.bscroll) {
                        this.bscroll.refformath()
                        return
                    }
                    const { formatListWrap } = this.$refs
                    if (!formatListWrap) {
                        return
                    }
                    this.bscroll = new BScroll(formatListWrap, {
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
        }
    }
</script>

<style lang="scss" scoped>
    .format-list-wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .format-group-mask {
        width: 510px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .format-group {
        width: 100%;
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 15px;

        img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }

        p {
            font-size: 20px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(89,89,97,1);
            line-height: 28px;
        }
    }

    .format-list {
        width: 510px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .format-item {
        width: 250px;
        height: 315px;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
        border: 1px solid transparent;
        cursor: pointer;

        &:hover {
            box-shadow: 0px 0px 22px 0px rgba(223,223,223,0.3);
            border: 1px solid rgba(219,177,101,1);
        }

        .cover-mask {
            width: 210px;
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                max-width: 210px;
                max-height: 180px;
            }
        }

        .text-info-mask {
            width: 100%;

            p {
                width: 100%;
                text-align: center;
                font-size: 20px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(89,89,97,1);
                line-height: 28px;
                margin-bottom: 5px;
            }

            span {
                display: block;
                text-align: center;
                font-size: 16px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(168,168,168,1);
                line-height: 30px;
            }
        }
    }
</style>

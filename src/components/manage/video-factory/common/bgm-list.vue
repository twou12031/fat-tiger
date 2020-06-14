<template>
    <div ref="resListWrap" class="res-list-wrap">
        <div class="res-list">
            <div v-for="(item,index) in list"
                 :key="index"
                 class="res-item"
                 @click="itemClickHandler">
                <img class="status-icon" src="https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=1">
                <div class="res-summary-mask">
                    <h6 class="text1line">Tarnished</h6>
                    <p class="text1line">indie . rock</p>
                </div>
                <img class="wavez-icon" src="https://images.pexels.com/photos/3860667/pexels-photo-3860667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <b class="bgm-duration">0:56</b>
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
                        this.bscroll.refresh()
                        return
                    }
                    const { resListWrap } = this.$refs
                    if (!resListWrap) {
                        return
                    }
                    this.bscroll = new BScroll(resListWrap, {
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
            },
            itemClickHandler (item) {
                this.$emit('checkBgm', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .res-list-wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .res-list {
        width: 510px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .res-item {
        width: 510px;
        height: 100px;
        box-sizing: border-box;
        padding: 0 30px;
        background: rgba(255,255,255,1);
        border-radius: 10px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        position: relative;

        &:hover {
            background: rgba(248,250,253,1);
        }

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
            width: 174px;
            height: 59px;
        }

        .bgm-duration {
            display: block;
            font-size: 12px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(102,102,102,1);
            line-height: 17px;
            position: absolute;
            right: 30px;
            bottom: 3px;
        }
    }
</style>

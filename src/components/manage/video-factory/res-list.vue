<template>
    <div ref="resListWrap" class="res-list-wrap">
        <div class="res-list">
            <div v-for="(item,index) in list"
                 :key="index"
                 class="res-item">
                <img class="res-cover" src="https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=1">
                <div class="res-content-mask">
                    <img class="play-icon" src="https://images.pexels.com/photos/3860667/pexels-photo-3860667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    <p class="free-corner">免费</p>
                    <img class="collection-icon" src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
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
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .res-item {
        width: 250px;
        height: 140px;
        box-shadow: 0px 0px 30px 0px rgba(223,223,223,0.3);
        position: relative;
        margin-bottom: 10px;

        .res-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .res-content-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .play-icon {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: rgba(160,171,191,0.8);
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
</style>

<template>
    <div class="user-center-view">
        <div class="nav-mask">
            <div class="nav-content">
                <div v-for="(item,index) in navs"
                     :key="index"
                     class="nav-item"
                     @click="navClick(item)">
                    <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div ref="userCenterRouterWrap" class="router-view-wrap">
            <div class="router-view-mask">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        data () {
            return {
                navs: [
                    {
                        name: '数据分析',
                        icon: '',
                        routeName: 'dataAnalysis'
                    }, {
                        name: '我的视频',
                        icon: '',
                        routeName: ''
                    }, {
                        name: '品牌预设',
                        icon: '',
                        routeName: 'styleSettings'
                    }, {
                        name: '团队成员',
                        icon: '',
                        routeName: ''
                    }, {
                        name: '我的订单',
                        icon: '',
                        routeName: ''
                    }, {
                        name: '账号设置',
                        icon: '',
                        routeName: ''
                    }
                ],
                bscroll: undefined
            }
        },
        mounted () {
            this.initBScroll()
        },
        methods: {
            navClick (item) {
                const { routeName } = item
                this.$router.push({
                    name: routeName
                })
            },
            initBScroll () {
                this.$nextTick(() => {
                    if (this.bscroll) {
                        this.bscroll.refresh()
                        return
                    }
                    const { userCenterRouterWrap } = this.$refs
                    if (!userCenterRouterWrap) {
                        return
                    }
                    this.bscroll = new BScroll(userCenterRouterWrap, {
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
    .user-center-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .nav-mask {
        width: 195px;
        height: 100%;
        background: #fff;
        overflow: auto;
    }

    .nav-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .nav-item {
        width: 100%;
        height: 86px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: rgba(46,51,65,1);
        cursor: pointer;

        img {
            width: 28px;
            height: 28px;
            border: 2px solid rgba(25,28,61,1);
            margin: 0 16px 0 40px;
        }

        &:hover {
            background: #F6F8FB;
        }
    }

    .router-view-wrap {
        flex: 1;
        height: 100%;
        background: #E8E8E8;
        overflow: hidden;
        position: relative;

        .router-view-mask {
            width: 100%;
            box-sizing: border-box;
            padding: 50px;
        }
    }
</style>

<style lang="scss">
    .user-center-view {
        .header {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }

        .router-view-title {
            font-size: 30px;
            font-family: PingFangSC-Semibold,PingFang SC;
            font-weight: 600;
            color: rgba(25,28,61,1);
            line-height: 42px;
            margin-right: 30px;
        }

        .title-supplement {
            font-size: 24px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(89,89,97,1);
            line-height: 33px;
        }
    }
</style>

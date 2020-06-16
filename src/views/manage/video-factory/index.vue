<template>
    <div class="video-factory-view">
        <div class="tabs-mask">
            <div class="tabs-content">
                <div v-for="(item,index) in tabs"
                     :key="index"
                     :class="{'actived-tab': checkedTabIndex === index}"
                     class="tab-item"
                     @click="tabClick(index)">
                    <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div ref="tabDetailWrap" class="tab-detail-wrap">
            <div class="tab-detail">
                <the-script v-if="checkedTabIndex === 0"/>
                <the-video v-if="checkedTabIndex === 1"/>
                <the-audio v-if="checkedTabIndex === 2"/>
                <the-style v-if="checkedTabIndex === 3"/>
                <the-format v-if="checkedTabIndex === 4"/>
            </div>
        </div>
        <div class="video-review-mask">
            <video-review/>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import TheScript from '@/components/manage/video-factory/the-script'
    import TheVideo from '@/components/manage/video-factory/the-video'
    import TheAudio from '@/components/manage/video-factory/the-audio'
    import TheStyle from '@/components/manage/video-factory/the-style'
    import TheFormat from '@/components/manage/video-factory/the-format'
    import VideoReview from '@/components/manage/video-factory/video-review'

    export default {
        components: {
            TheScript,
            TheVideo,
            TheAudio,
            TheStyle,
            TheFormat,
            VideoReview
        },
        data () {
            return {
                checkedTabIndex: 0,
                tabs: [
                    {
                        name: '脚本',
                        icon: ''
                    }, {
                        name: '视频',
                        icon: ''
                    }, {
                        name: '音乐',
                        icon: ''
                    }, {
                        name: '风格',
                        icon: ''
                    }, {
                        name: '格式',
                        icon: ''
                    }
                ],
                bscroll: undefined
            }
        },
        mounted () {
            // this.initBScroll()
        },
        methods: {
            tabClick (tabIndex) {
                const { name } = this.$route
                this.$router.push({
                    name,
                    params: {
                        tabIndex
                    }
                })
            },
            initBScroll () {
                this.$nextTick(() => {
                    if (this.bscroll) {
                        this.bscroll.refresh()
                        return
                    }
                    const { tabDetailWrap } = this.$refs
                    if (!tabDetailWrap) {
                        return
                    }
                    this.bscroll = new BScroll(tabDetailWrap, {
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
        beforeRouteUpdate (to, from, next) {
            const { params } = to
            this.checkedTabIndex = parseInt(params.tabIndex) || 0
            next()
        },
        beforeRouteEnter (to, from, next) {
            next((vm) => {
                const { params } = vm.$route
                vm.checkedTabIndex = parseInt(params.tabIndex) || 0
            })
        }
    }
</script>

<style lang="scss" scoped>
    .video-factory-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .tabs-mask {
        width: 110px;
        height: 100%;
        background: rgba(255,255,255,1);
        box-shadow: 0px 0px 0px 1px rgba(232,232,232,0.5);
        overflow: auto;
        position: relative;
    }

    .tabs-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .tab-item {
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: rgba(46,51,65,1);
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
            margin: 18px auto 6px;
        }

        &:hover {
            background: #F6F8FB;
        }
    }

    .actived-tab {
        background: #F6F8FB;
    }

    .tab-detail-wrap {
        width: 590px;
        height: 100%;
        overflow: hidden;
        background: #fff;
    }

    .video-review-mask {
        flex: 1;
        height: 100%;
        background: #E8E8E8;
        overflow: hidden;
        position: relative;
    }
</style>

<style lang="scss">
</style>

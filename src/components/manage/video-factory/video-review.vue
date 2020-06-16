<template>
    <div ref="videoReviewWrap" class="video-review-wrap">
        <div class="video-review">
            <div class="video-section">
                123
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        components: {
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
            this.initBScroll()
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
                    const { videoReviewWrap } = this.$refs
                    if (!videoReviewWrap) {
                        return
                    }
                    this.bscroll = new BScroll(videoReviewWrap, {
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
    .video-review-wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        background: rebeccapurple;
    }

    .video-review {
        width: 100%;
        height: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>

<template>
    <div class="vertical-banner">
        <div ref="bannerWrap" class="banner-wrap">
            <div class="banner-list">
                <div v-for="(item,index) in banner"
                     :key="index"
                     class="banner-item">
                    <img :src="item.bg" class="banner-bg">
                    <div class="content-mask">
                        123
                    </div>
                </div>
            </div>
            <div v-show="banner.length > 1" class="banner-dots">
                <span v-for="(item, index) in banner"
                      :class="{'actived-dot': activedBannerIndex === index}"
                      :key="index"
                      class="dot" />
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
                checkedAnchorIndex: 0,
                anchors: [
                    {
                        name: '产品',
                        pos: 1
                    }, {
                        name: '定价',
                        pos: 2
                    }
                ],
                bscrollTimer: undefined,
                bscroll: undefined,
                activedBannerIndex: 0,
                banner: [
                    {
                        bg: 'https://images.pexels.com/photos/4312843/pexels-photo-4312843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    }, {
                        bg: 'https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    }
                ]
            }
        },
        computed: {
        },
        watch: {
        },
        mounted () {
            this.initBanner()
        },
        methods: {
            anchorClickHandler (item, index) {
                if (index === this.checkedAnchorIndex) {
                    return
                }

                this.checkedAnchorIndex = index
            },
            initBanner () {
                this.$nextTick(() => {
                    if (!this.$refs.bannerWrap) {
                        return
                    }
                    if (this.bscroll) {
                        this.bscroll.refresh()
                        return
                    }
                    this.bscroll = new BScroll(this.$refs.bannerWrap, {
                        click: true,
                        bounce: false,
                        scrollX: false,
                        scrollY: true,
                        momentum: false,
                        snap: {
                            loop: true,
                            threshold: 0.3,
                            speed: 1800
                        }
                    })
                    this.playBanner()
                    this.bscroll.on('scrollEnd', () => {
                        const { pageY } = this.bscroll.getCurrentPage()
                        this.activedBannerIndex = pageY
                        this.playBanner()
                    })
                    this.bscroll.on('beforeScrollStart', () => {
                        clearTimeout(this.bscrollTimer)
                    })
                })
            },
            playBanner () {
                if (this.bscrollTimer) {
                    clearTimeout(this.bscrollTimer)
                }
                this.bscrollTimer = setTimeout(() => {
                    this.bscroll.next()
                }, 2000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vertical-banner {
        width: 100%;
        height: 100vh;
        background: rgba(61,64,94,0.45);

        .banner-wrap {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
        }

        .banner-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }

        .banner-item {
            width: 100%;
            height: 100vh;
            position: relative;

            .banner-bg {
                width: 100%;
                height: 100%;
                object-fit: cover;
                // transform: scale(1);
                // filter: blur(2px);
            }

            .content-mask {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1
            }
        }

        .banner-dots {
            position: absolute;
            right: 50px;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;

            .dot {
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                border: 2px solid rgba(250,251,254,1);
                border-radius: 50%;
                margin: 10px 0;
            }

            .actived-dot {
                background: rgba(250,251,254,1);
            }
        }
    }
</style>

<template>
    <div class="product-home-view">
        <vertical-banner/>
        <div ref="partnerWrap" class="partner-wrap">
            <div class="partner-list">
                <div v-for="(item,index) in partners"
                     :key="index"
                     class="partner-item">
                    <img :src="item">
                </div>
            </div>
        </div>
        <div class="feature-list">
            <div v-for="(item,index) in features"
                 :key="index"
                 class="feature-item">
                <img src="item.icon">
                <h5>{{ item.title }}</h5>
                <p>{{ item.describe }}</p>
            </div>
        </div>
        <div class="introduce-mask">
            <div class="introduce-item">
                <div class="introduce-content">
                    <h4>
                        利用我们的AI使您的整个团队都可以
                        <br>
                        在几分钟内制作社交视频并最大限度地扩大您的影响范围
                    </h4>
                    <h6>将视频制作时间从数周缩短至数分钟</h6>
                    <div class="content-with-pic">
                        <div class="content-text">
                            <h5>使用AI自动创建视频</h5>
                            <p>输入博客文章或RSS提要，Lumen5人工智能系统将帮助您总结内容并将每个场景与相关的视频，照片和音乐进行匹配</p>
                        </div>
                        <img src="">
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <div class="content-with-pic">
                        <img src="">
                        <div class="content-text">
                            <h5>旨在与您的全球团队扩展</h5>
                            <h6>具有无限的扩展全球潜力。随着您的团队和视频营销工作的发展，无缝地添加用户并轻松协作</h6>
                            <p><b>校验</b> 监控和批准您的团队创建的每个视频</p>
                            <p><b>校验</b> 管理管理员和协作者的访问级别</p>
                            <p><b>校验</b> 将团队成员分配到多个工作区</p>
                            <p><b>校验</b> 全球扩展并创建30多种语言的视频</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <div class="content-with-pic">
                        <div class="content-text">
                            <h5>您在每个视频上的品牌</h5>
                            <p>确保每个视频都遵循您的品牌准则的严格要求。</p>
                            <p>设置品牌配置文件，单击按钮即可将其应用于每个视频</p>
                            <p>指定品牌颜色，水印，字体和其他自定义选项</p>
                        </div>
                        <img src="">
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <div class="content-with-pic">
                        <img src="">
                        <div class="content-text">
                            <h5>正确的视觉效果可以讲述任何故事</h5>
                            <p>上传您自己的媒体资产或使用庞大的胖虎数字媒体库</p>
                            <p>Getty Images，Storyblocks和100000+种股票视频和照片</p>
                            <p>30,000+种配乐和音乐文件，可帮助您唤起每一种心情</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <div class="content-with-pic">
                        <div class="content-text">
                            <h5>与专门的客户经理一起工作</h5>
                            <h6>我们在这里竭尽所能，帮助您充分利用胖虎，并指导您的所有团队成员最大限度地发挥视频对品牌的潜力</h6>
                            <p><b>校验</b> 一线支持和功能请求</p>
                            <p><b>校验</b> 为您的团队提供虚拟培训和产品演示</p>
                            <p><b>校验</b> 新团队成员的入职培训</p>
                            <p><b>校验</b> 有关视频策略的季度评论和建议</p>
                        </div>
                        <img src="">
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <div class="content-with-pic">
                        <img src="">
                        <div class="content-text">
                            <h5>一款改变了视频制作方式产品</h5>
                            <div class="text-group">
                                <i>01</i>
                                <p>
                                    <b>输入文章链接将其转换为视频</b>
                                    <br>
                                    使用自然语言处理算法，我们的系统将自动为您创建一个情节提要
                                </p>
                            </div>
                            <div class="text-group">
                                <i>02</i>
                                <p>
                                    <b>我们的AI将找到完美的视听作品</b>
                                    <br>
                                    使用计算机视觉技术，我们的系统将找到与您的内容相关的视觉和音频
                                </p>
                            </div>
                            <div class="text-group">
                                <i>03</i>
                                <p>
                                    <b>一键添加品牌</b>
                                    <br>
                                    只需设置一次品牌资料即可添加到每个视频种，包括号召性用语以促进转化
                                </p>
                            </div>
                            <div class="text-group">
                                <i>04</i>
                                <p>
                                    <b>输入文章链接将其转换为视频</b>
                                    <br>
                                    您团队的管理员可以访问信息中心以查看每个视频并批准它们进行共享
                                </p>
                            </div>
                            <div class="text-group">
                                <i>05</i>
                                <p>
                                    <b>输入文章链接将其转换为视频</b>
                                    <br>
                                    Facebook上的视频的覆盖率提高了10倍。像Google和Twitter这样的平台也将视频排在其他类型的帖子之上
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <h4>
                        用胖虎创建的视频
                    </h4>
                    <h6>从公司博客和新闻稿中产生</h6>
                    <div class="example-video-list">
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <div class="content-with-pic">
                        <div class="content-text">
                            <h5>立即开始</h5>
                            <h6>将视频的力量交到组织中的每个人手中</h6>
                        </div>
                        <button>申请演示</button>
                    </div>
                </div>
            </div>
            <div class="introduce-item">
                <div class="introduce-content">
                    <h4>
                        选择合适的版本，开启高效设计
                    </h4>
                    <h6>从体验版到个人版，从个人版到企业版满足不同等级的需求，为你和你的伙伴创造更多价值</h6>
                    <div class="example-video-list">
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                        <div class="example-video-item">
                            <img src="" class="example-video-cover">
                            <img src="" class="play-icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VerticalBanner from '@/components/product/vertical-banner'
    import BScroll from 'better-scroll'

    export default {
        components: {
            VerticalBanner
        },
        props: {
        },
        data () {
            return {
                partners: [
                    'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                ],
                partnerBScroll: undefined,
                features: [
                    {
                        icon: '',
                        title: '创建了150万+个视频',
                        describe: '受到全球各个行业的品牌和企业的信赖，累计生成视频150万+的数量，覆盖上千个品牌'
                    }, {
                        icon: '',
                        title: '12倍参与度',
                        describe: '视频在社交网站上的表现优于文字，图片，GIF和所有其他类型的帖子'
                    }, {
                        icon: '',
                        title: '8分钟',
                        describe: '使用我们的AI，您团队中的任何人都可以在8分钟内制作出引人入胜的视频'
                    }
                ],
                packagelist: [
                    {
                        type: 'month',
                        name: '月套餐',
                        detail: [
                            {

                            }
                        ]
                    }
                ]
            }
        },
        computed: {
        },
        mounted () {
            this.initBanner()
        },
        methods: {
            initBanner () {
                this.$nextTick(() => {
                    if (!this.$refs.partnerWrap) {
                        return
                    }
                    if (this.partnerBScroll) {
                        this.partnerBScroll.refresh()
                        return
                    }
                    this.partnerBScroll = new BScroll(this.$refs.partnerWrap, {
                        click: true,
                        bounce: false,
                        scrollX: true,
                        scrollY: false,
                        momentum: false
                    })
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next()
        }
    }
</script>

<style lang="scss" scoped>
    .product-home-view {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .partner-wrap {
        width: 100%;
        height: 150px;
        padding: 100px 0;
        background: #fafbfb;
        overflow: hidden;

        .partner-list {
            width: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            .partner-item {
                padding: 0 25px;

                img {
                    height: 150px;
                }
            }
        }
    }

    .feature-list {
        background: rgba(248,250,253,1);
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;

        .feature-item {
            width: 460px;
            height: 518px;
            box-sizing: border-box;
            padding: 100px 0;
            margin: 0 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            img {
                width: 60px;
                height: 60px;
            }

            h5 {
                font-size: 40px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(61,64,94,1);
                line-height: 56px;
            }

            p {
                width: 400px;
                font-size: 28px;
                font-family: PingFangSC-Light,PingFang SC;
                font-weight: 300;
                color: rgba(61,64,94,1);
                line-height: 46px;
                text-align: center;
            }
        }

        .feature-item:hover {
            background: rgba(255,255,255,1);
            box-shadow: 0px 30px 50px 0px rgba(212,229,255,0.5);
        }
    }

    .introduce-mask {
        width: 100%;
    }

    .introduce-item {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;

        h4 {
            font-size: 50px;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 500;
            color: rgba(61,64,94,1);
            line-height: 70px;
            text-align: center;
        }

        h6 {
            font-size: 28px;
            font-family: PingFangSC-Light,PingFang SC;
            font-weight: 300;
            color: rgba(61,64,94,1);
            line-height: 40px;
            text-align: center;
        }

        .content-with-pic {
            width: 1440px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .content-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            h5 {
                font-size: 40px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(61,64,94,1);
                line-height: 56px;
            }

            h6 {
                text-align: left;
            }


            p {
                font-size: 30px;
                font-family: PingFangSC-Light,PingFang SC;
                font-weight: 300;
                color: rgba(61,64,94,1);
                line-height: 46px;
                text-align: left;
            }
        }

        img {
            width: 720px;
            height: 100%;
            background: yellowgreen;
        }

        &:nth-of-type(odd) {
            background: #fafbfb;
        }

        &:nth-of-type(even) {
            background: #F8FAFD;
        }

        &:nth-child(1) {
            padding: 100px 0;

            h6 {
                margin: 20px auto 60px;
            }

            .content-with-pic {
                height: 403px;
            }

            .content-text {
                width: 610px;

                h5 {
                    margin-bottom: 30px;
                }
            }

            img {
                width: 720px;
            }
        }

        &:nth-child(2) {
            padding: 37px 0;

            .content-with-pic {
                height: 657px;
            }

            .content-text {
                width: 610px;

                h6 {
                    margin: 20px auto 60px;
                }

                p {
                    margin-bottom: 66px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            img {
                width: 516px;
            }
        }

        &:nth-child(3) {
            padding: 120px 0 74px;

            .content-with-pic {
                height: 432px;;
            }

            .content-text {
                width: 646px;

                h5 {
                    margin-bottom: 30px;
                }

                p {
                    margin-bottom: 66px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            img {
                width: 665px;
            }
        }

        &:nth-child(4) {
            padding: 36px 0;

            .content-with-pic {
                height: 657px;
            }

            .content-text {
                width: 646px;
                box-sizing: border-box;
                padding-bottom: 74px;

                h5 {
                    margin-bottom: 30px;
                }

                p {
                    margin-bottom: 66px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            img {
                width: 516px;
            }
        }

        &:nth-child(5) {
            padding: 122px 0 112px;

            .content-with-pic {
                height: 552px;
            }

            .content-text {
                width: 646px;
                box-sizing: border-box;

                h6 {
                    margin: 20px auto 40px;
                }
                p {
                    margin-bottom: 64px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            img {
                width: 720px;
            }
        }

        &:nth-child(6) {
            padding: 100px 0;

            .content-with-pic {
                height: 1060px;
            }

            .content-text {
                width: 750px;
                box-sizing: border-box;

                h5 {
                    padding-left: 90px;
                    margin-bottom: 30px;
                }

                .text-group {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 50px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                i {
                    width: 85px;
                    font-size: 70px;
                    font-family: PingFangSC-Medium,PingFang SC;
                    font-weight: 500;
                    color: rgba(61,64,94,0.27);
                    line-height:98px;
                    font-style: normal;
                    text-align: center;
                }

                p {
                    width: 646px;

                    b {
                        display: inline-block;
                        margin-bottom: 10px;
                    }
                }
            }

            img {
                width: 642px;
            }
        }

        &:nth-child(7) {
            padding: 110px 0 85px;

            h4 {
                line-height: 65px;
            }

            h6 {
                margin: 20px auto 40px;
            }

            .example-video-list {
                width: 1460px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;
            }

            .example-video-item {
                width: 345px;
                height: 345px;
                border-radius: 10px;
                margin: 10px;
                overflow: hidden;
                position: relative;
                cursor: pointer;

                .example-video-cover {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .play-icon {
                    width: 95px;
                    height: 95px;
                    background: rgba(25,28,61,0.5);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -48px;
                    margin-top: -48px;
                }
            }
        }

        &:nth-child(8) {

            .content-with-pic {
                height: 206px;
            }

            .content-text {
                width: 646px;
                box-sizing: border-box;
                margin-bottom: 20px;

                h6 {
                    margin: 20px 0 0;
                    font-family: PingFangSC-Regular,PingFang SC;
                }
            }

            button {
                width: 210px;
                height: 60px;
                background: rgba(219,177,101,1);
                border-radius: 35px;
                font-size: 30px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(255,255,255,1);
            }
        }

        &:nth-child(9) {
            padding: 100px 0;

            h6 {
                margin: 20px 0 30px;
            }

            .content-with-pic {
                height: 206px;
            }

            .content-text {
                width: 646px;
                box-sizing: border-box;
                margin-bottom: 20px;
            }

            button {
                width: 210px;
                height: 60px;
                background: rgba(219,177,101,1);
                border-radius: 35px;
                font-size: 30px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(255,255,255,1);
            }
        }
    }
</style>

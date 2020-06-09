<template>
    <div class="check-video-view">
        <div v-if="stepIndex === 0" class="check-video-content">
            <div class="header">
                <h5>选择视频</h5>
                <button class="skip-btn" @click="stepIndex=stepIndex+1">
                    跳过
                </button>
            </div>
            <div class="main-content">
                <img class="uploader-icon" src="">
                <h6>选择您要上传的文件</h6>
                <span>或讲视频文件拖拽到此处</span>
                <span>
                    文件要求：JPG、PNG、GIF、MOV、MP4 格式最大文件大小600MB;
                    <br>
                    为获得最佳效果，请使用1920 X 1080px大小文件
                </span>
                <p>
                    上传视频，即表示您同意<a href="#">《上传服务条款》</a>，请勿上传涩情及反动等违法违规视频
                </p>
            </div>
        </div>
        <div v-if="stepIndex === 1" class="check-video-content step-two">
            <div class="header">
                <h5>编辑视频内容</h5>
                <button class="skip-btn">
                    跳过
                </button>
            </div>
            <div class="main-content">
                <div class="video-uploader-mask">
                    video-uploader
                </div>
                <div class="form-mask">
                    form
                </div>
                <button>保存</button>
            </div>
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
            return {
                stepIndex: 0
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
    .check-video-view {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: #FEFEFF;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 100px;
    }

    .check-video-content {
        width: 1440px;

        .header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 50px auto 30px;

            h5 {
                font-size: 30px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(25,28,61,1);
                line-height: 42px;
            }

            .skip-btn {
                height: 25px;
                font-size: 18px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(0,117,255,1);
            }
        }

        .main-content {
            width: 100%;
            height: 758px;
            background: rgba(255,255,255,1);
            border-radius: 6px;
            border: 2px solid rgba(223,223,223,1);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            .uploader-icon {
                width: 150px;
                height: 150px;
                background: rgba(219,177,101,1);
                border-radius: 6px;
                margin: 130px auto 50px;
            }

            h6 {
                font-size: 30px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(25,28,61,1);
                line-height: 42px;
                margin: 0 auto 20px;
            }

            span {
                font-size: 24px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(165,165,165,1);
                line-height: 33px;
                text-align: center;
                margin-bottom: 50px;
            }

            p {
                font-size: 24px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
                color: rgba(25,28,61,1);
                line-height: 33px;
                margin-top: 64px;
            }

            a {
                color: #0075FF;
                cursor: pointer;
            }
        }
    }

    .step-two {

        .main-content {
            height: 808px;
            border-radius: 6px;
            border: 1px solid rgba(232,232,232,0.5);
            box-sizing: border-box;
            padding: 50px 50px 30px;

            .video-uploader-mask {
                width: 100%;
                height: 285px;
                background: royalblue;
            }

            .form-mask {
                width: 100%;
                height: 225px;
                background: yellowgreen;
                margin: 65px auto 103px;
            }

            button {
                width: 120px;
                height: 50px;
                background: rgba(46,51,65,1);
                border-radius: 45px;
                font-size: 18px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(255,255,255,1);
            }
        }
    }
</style>

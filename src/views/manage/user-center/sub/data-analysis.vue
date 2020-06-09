<template>
    <div class="data-analysis-view">
        <div class="header">
            <h5 class="router-view-title">
                分析概述
            </h5>
            <h6 class="title-supplement">
                过去30天
            </h6>
        </div>
        <div class="analysis-content">
            <div v-for="(item,index) in analysis"
                 :key="index"
                 :style="{'margin-right': ((index+1)%3 === 0) ? '0' : ''}"
                 class="analysis-item">
                <p>{{ item.key }}</p>
                <span>{{ item.val }}</span>
                <img :src="item.icon || 'https://images.pexels.com/photos/3075988/pexels-photo-3075988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                analysis: [
                    {
                        key: '发布的视频',
                        val: '9个',
                        icon: ''
                    }, {
                        key: '平均时长',
                        val: '49秒',
                        icon: ''
                    }, {
                        key: '创作时长',
                        val: '49秒',
                        icon: ''
                    }, {
                        key: '剩余余额',
                        val: '49秒',
                        icon: ''
                    }, {
                        key: '团队成员视频计数',
                        val: '49秒',
                        icon: ''
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .data-analysis-view {
        width: 100%;
    }

    .analysis-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 30px;

        .analysis-item {
            width: 528px;
            height: 250px;
            border-radius: 10px;
            overflow: hidden;
            margin-right: 20px;
            margin-bottom: 20px;
            color: #fff;
            position: relative;

            p {
                width: 100%;
                box-sizing: border-box;
                padding: 0 50px;
                line-height: 144px;
                font-size: 40px;
                font-family: PingFangSC-Semibold,PingFang SC;
                font-weight: 600;
            }

            span {
                width: 100%;
                display: block;
                box-sizing: border-box;
                padding: 0 50px;
                line-height: 106px;
                font-size: 30px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
            }

            img {
                width: 86px;
                height: 86px;
                border-radius: 50%;
                background: rgba(255,255,255,1);
                opacity: 0.3;
                position: absolute;
                top: 40px;
                right: 50px;
            }

            &:nth-child(1) {
                p {
                    background: linear-gradient(315deg,rgba(107,115,255,1) 0%,rgba(62,71,231,1) 100%);
                }

                span {
                    background: linear-gradient(315deg,rgba(107,115,255,1) 0%,rgba(62,71,231,1) 100%);
                }

            }

            &:nth-child(2) {
                background: linear-gradient(315deg,rgba(107,115,255,1) 0%,rgba(62,71,231,1) 100%);
            }

            &:nth-child(3) {
                background: linear-gradient(315deg,rgba(107,115,255,1) 0%,rgba(62,71,231,1) 100%);
            }

            &:nth-child(4) {
                background: linear-gradient(315deg,rgba(107,115,255,1) 0%,rgba(62,71,231,1) 100%);
            }

            &:nth-child(5) {
                background: linear-gradient(315deg,rgba(107,115,255,1) 0%,rgba(62,71,231,1) 100%);
            }
        }
    }
</style>

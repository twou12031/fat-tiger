<template>
    <div class="global-header">
        <div class="company-infos">
            <img class="logo" src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <h1 class="name">科技有限公司</h1>
            <button class="vip-btn">
                <img src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >
                升级
            </button>
        </div>
        <div class="user-infos"
             @click="showMoreActvies = !showMoreActvies">
            <img class="contact-icon" src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <img :src="userInfos.avatar" class="user-avatar">
            <p class="user-name">{{ userInfos.nickName }}</p>
            <div :style="{transform: showMoreActvies? 'rotate(180deg)':''}"
                 class="user-toggle-active"/>
            <div :class="{ 'more-actives-showed': showMoreActvies }"
                 class="more-actives-mask">
                <div class="more-actives">
                    <button v-for="(item,index) in moreActives"
                            :key="index"
                            @click="moreActivesClick(item)">
                        {{ item.text }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
                showMoreActvies: false,
                userInfos: {
                    nickName: 'Micheal Hogan',
                    avatar: 'https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                moreActives: [
                    {
                        text: '我的视频',
                        routeName: 'userSetting'
                    },
                    {
                        text: '我的渠道',
                        routeName: 'userSetting'
                    },
                    {
                        text: '我的渠道',
                        routeName: 'userSetting'
                    },
                    {
                        text: '团队成员',
                        routeName: 'userSetting'
                    },
                    {
                        text: '设置',
                        routeName: 'userSetting'
                    },
                    {
                        text: '退出'
                    }
                ]
            }
        },
        computed: {
        },
        watch: {
        },
        mounted () {
            window.addEventListener('click', (ev) => {
                if (ev.target.className !== 'user-toggle-active') {
                    this.showMoreActvies = false
                }
            })
        },
        methods: {
            moreActivesClick (item) {
                console.log('@moreActivesClick click', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .global-header {
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 0 120px 0 35px;
        min-width: 1440px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        background: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #F6F8FB;
    }

    .company-infos {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .logo {
            width: 41px;
            height: 41px;
            background: rgba(255,255,255,1);
            border-radius: 50%;
            margin-right: 20px;
        }

        .name {
            font-size: 16px;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 500;
            color: #191C3D;
            line-height: 30px;
        }

        .vip-btn {
            width: 120px;
            height: 40px;
            background: rgba(228,182,99,1);
            border-radius: 45px;
            font-size: 18px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(255,255,255,1);
            margin-left: 63px;

            img {
                width: 16px;
                height: 11px;
                margin-right: 5px;
            }
        }
    }

    .user-infos {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        position: relative;

        .contact-icon {
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 100px;
            margin-left: 50px;
            cursor: pointer;
        }

        .user-name {
            font-size: 16px;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(25,28,61,1);
            line-height: 30px;
            margin: 0 20px;
            cursor: pointer;
        }

        .user-toggle-active {
            width: 18px;
            height: 11px;
            background:  #191C3D;
            cursor: pointer;
        }

        .more-actives-mask {
            width: 180px;
            height: auto;
            position: absolute;
            top: 70px;
            right: 0;
            background: #FFFFFF;
            overflow: hidden;
            max-height: 0;
            border-radius: 10px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12), 0 0 6px 0 rgba(0,0,0,0.04);
            border: none;
            transition: max-height .2s ease-in;
        }

        .more-actives {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            border-radius: 2px;

            button {
                width: 100%;
                height: 50px;
                padding-left: 20px;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #475669;
                letter-spacing: 0;
                line-height: 14px;
                text-align: left;
            }

            button:hover {
                background: #ECF5FF;
            }
        }

        .more-actives-showed {
            max-height: 300px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12), 0 0 6px 0 rgba(0,0,0,0.04);
        }
    }
</style>

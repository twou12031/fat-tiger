<template>
    <div class="global-header">
        <div class="company-infos">
            <img src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="logo">
            <h1 class="name">科技有限公司</h1>
        </div>
        <div class="actives-mask">
            <div class="anchor-mask">
                <div v-for="(item,index) in anchors"
                     :key="index"
                     :class="{'checked-anchor-item': checkedAnchorIndex === index}"
                     class="anchor-item"
                     @click="anchorClickHandler(item,index)">
                    {{ item.name }}
                </div>
            </div>
            <div class="login-rgister-btns">
                <button class="login-btn">登录</button>
                <button class="register-btn">注册</button>
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
                checkedAnchorIndex: 0,
                anchors: [
                    {
                        name: '产品',
                        pos: 1
                    }, {
                        name: '定价',
                        pos: 2
                    }
                ]
            }
        },
        computed: {
        },
        watch: {
        },
        mounted () {
        },
        methods: {
            anchorClickHandler (item, index) {
                if (index === this.checkedAnchorIndex) {
                    return
                }

                this.checkedAnchorIndex = index
            }
        }
    }
</script>

<style lang="scss" scoped>
    .global-header {
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 0 120px;
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
    }

    .company-infos {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .logo {
            width: 56px;
            height: 56px;
            background: rgba(255,255,255,1);
            border-radius: 50%;
            margin-right: 20px;
        }

        .name {
            font-size: 28px;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 500;
            color: rgba(255,255,255,1);
            line-height: 30px;
        }
    }

    .actives-mask {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .anchor-mask {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            .anchor-item {
                width: 56px;
                height: 52px;
                margin-top: 13px;
                margin-left: 124px;
                font-size: 28px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(255,255,255,1);
                line-height: 40px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
            }

            .anchor-item::after {
                font-size: 0;
                width: 0%;
                height: 6px;
                background: rgba(255,255,255,1);
                border-radius: 3px;
                transition: width .3s;
            }

            .checked-anchor-item::after {
                width: 100%;
            }
        }

        .login-rgister-btns {
            margin-left: 47px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            button {
                width: 150px;
                height: 54px;
                border-radius: 100px;
                font-size: 28px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: rgba(255,255,255,1);
                margin-left: 30px;
            }

            .login-btn {
                border:1px solid rgba(255,255,255,1);
            }

            .register-btn {
                background: rgba(219,177,101,1);

            }
        }
    }
</style>

<template>
    <div id="app">
        <!-- <login-register v-if="showLoginRegister"/> -->
        <div class="router-view-wrapper">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    // import LoginRegister from '@/components/loginRegister'

    export default {
        components: {
            // LoginRegister
        },
        data () {
            return {
            }
        },
        computed: {
            showLoginRegister () {
                return this.$store.state.showLoginRegister
            }
        },
        watch: {
        },
        created () {
        },
        mounted () {
        },
        methods: {
        }
    }
</script>


<style lang="scss" scoped>
    .router-view-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .networkError-mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            display: block;
        }

        .main {
            width: 500px;
            margin-top: -140px;
        }

        .sorry {
            width: 133px;
            margin: 30px 0 20px;
        }

        p {
            margin-bottom: 30px;
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #999999;
            text-align: center;
        }

        button {
            width: 180px;
            height: 54px;
            background: #0084FF;
            border-radius: 8px;
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            line-height: 20px;
        }
    }
</style>

<style lang="scss">
    body {
        background: #f6f6f6;
    }

    #app {
        width: 100vw;
        height: 100vh;
    }

    .site-footer {
        width: 100%;
        height: 128px;
        background-repeat: no-repeat;
        background-position: center 30px;
        border-top: 1px solid #F0F2F7;
    }

    h5 {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .popper__arrow {
        border-bottom-color: #d5d5d6 !important;
    }
</style>

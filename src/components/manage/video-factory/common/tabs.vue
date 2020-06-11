<template>
    <div class="tabs-mask">
        <div v-for="(item,index) in tabs"
             :key="index"
             :class="{'actived-tab': checkedTabIndex === index}"
             class="tab-item"
             @click="tabClick(index)">
            {{ item.name }}
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
            tabs: {
                type: Array,
                default () {
                    return []
                }
            },
            tabClickHandler: {
                type: Function,
                default () {
                    return undefined
                }
            },
            checkedTabIndex: {
                required: true,
                type: Number,
                default () {
                    return undefined
                }
            }
        },
        data () {
            return {
            }
        },
        computed: {
        },
        methods: {
            tabClick (index) {
                if (this.checkedTabIndex === index) {
                    return
                }
                this.$emit('changeTab', index)
            }
        },
        beforeRouteEnter (to, from, next) {
            next()
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-mask {
        width: 510px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #F2F2F2;
    }

    .tab-item {
        width: 102px;
        height: 28px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(165,165,165,1);
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        position: relative;
        transition:  all .3s;

        &:hover {
            color: #3B3646;
        }

        &:after {
            position: absolute;
            left: 50%;
            bottom: -12px;
            margin-left: 0;
            font-size: 0;
            width: 0;
            height: 4px;
            background: rgba(228,182,99,1);
            border-radius: 2px;
            transition:  all .3s;
        }
    }

    .actived-tab {
        color: #3B3646;

        &:after {
            width: 20px;
            margin-left: -10px;
        }
    }
</style>

<template>
    <div class="manage-view">
        <manage-header/>
        <div class="router-view-wrap">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import ManageHeader from '@/components/manage/header'

    export default {
        components: {
            ManageHeader
        },
        props: {
        },
        data () {
            return {}
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
    .manage-view {
        width: 100%;
        height: 100%;
    }

    .router-view-wrap {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 100px;
    }
</style>

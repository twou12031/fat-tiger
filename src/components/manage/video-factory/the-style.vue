<template>
    <div class="the-style-view">
        style
    </div>
</template>

<script>
    export default {
        components: {
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
    .the-style-view {
        width: 100%;
        box-sizing: border-box;
        padding: 50px 30px 50px 34px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>

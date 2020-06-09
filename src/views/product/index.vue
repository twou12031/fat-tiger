<template>
    <div class="product-view">
        <product-header/>
        <!-- <div class="roter-view-wrap"> -->
        <keep-alive>
            <router-view/>
        </keep-alive>
        <!-- </div> -->
    </div>
</template>

<script>
    import ProductHeader from '@/components/product/header'

    export default {
        components: {
            ProductHeader
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
    .product-view {
        width: 100%;
    }
</style>

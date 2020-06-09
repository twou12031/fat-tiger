
import Vue from 'vue'
import Router from 'vue-router'

import product from '@/views/product'


const allRoutes = [
    {
        path: '/product',
        name: 'product',
        component: product,
        redirect: {
            name: 'productHome'
        },
        children: [
            {
                path: '/product/home',
                name: 'productHome',
                component: () => {
                    return import('@/views/product/home')
                }
            },
            {
                path: '/product/start',
                name: 'productStart',
                component: () => {
                    return import('@/views/product/start')
                }
            }
        ]
    },
    {
        path: '/manage',
        name: 'manage',
        component: () => {
            return import('@/views/manage')
        },
        redirect: {
            name: 'userCenter'
        },
        children: [
            {
                path: '/manage/userCenter',
                name: 'userCenter',
                component: () => {
                    return import('@/views/manage/user-center')
                },
                redirect: {
                    name: 'dataAnalysis'
                },
                children: [
                    {
                        path: '/manage/userCenter/dataAnalysis',
                        name: 'dataAnalysis',
                        component: () => {
                            return import('@/views/manage/user-center/sub/data-analysis')
                        }
                    }, {
                        path: '/manage/userCenter/styleSettings',
                        name: 'styleSettings',
                        component: () => {
                            return import('@/views/manage/user-center/sub/style-settings')
                        }
                    }
                ]
            },
            {
                path: '/manage/videoFactory',
                name: 'videoFactory',
                component: () => {
                    return import('@/views/manage/video-factory')
                }
            },
            {
                path: '/manage/publish',
                name: 'publish',
                component: () => {
                    return import('@/views/manage/publish')
                }
            }
        ]
    },
    {
        path: '/',
        redirect: {
            name: 'product'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'product'
        }
    }
]

Vue.use(Router)


// Config router
const router = new Router({
    routes: allRoutes
})

router.beforeEach((to, from, next) => {
    const { params } = to
    for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
            const value = params[key]
            params[key] = `${ value }`
        }
    }
    next()
})


export default router

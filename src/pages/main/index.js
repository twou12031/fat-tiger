
import Vue from 'vue'

import ElementUI from 'element-ui'

import router from '@/router'
import store from '@/store'

import apis from '@/plugins/apis'
import tools from '@/plugins/tools'
import Cookies from 'js-cookie'

import app from './app.vue'


Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(apis)
Vue.prototype.$tools = tools
Vue.prototype.$cookies = Cookies

new Vue({
    router,
    store,
    render (h) {
        return h(app)
    }
}).$mount('#app')

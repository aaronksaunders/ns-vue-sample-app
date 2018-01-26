import Vue from 'nativescript-vue'
import App from './components/App.vue'
import NewPage from './components/NewPage.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/Home',
            component: App
        },
        {
            path: '/NewPage',
            component: NewPage
        },
        {
            path: '*',
            redirect: '/Home'
        }
    ]
})

// default route...
router.replace('/Home')

new Vue({
    router,
    template: `<router-page />`,
    created() {
        // this.$setPageTransition('slide', 1000)
    }
}).$start()
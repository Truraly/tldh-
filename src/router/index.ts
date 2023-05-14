import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/moyu',
            name: 'moyu',
            component: () => import('../views/moyu.vue')
        },
        {
            path: '/lovehzy',
            name: 'lovehzy',
            component:  () => import('../views/lovehzy.vue')
        },
        {

            path: '/map',
            name: 'map',
            component: () => import('../views/map.vue')
        },
        {
            path: '/dwnldPrinterDriver',
            name: 'dwnldPrinterDriver',
            component: () => import('../views/dwnldPrinterDriver.vue')
        },
        // {
        //     path: '/niuke',
        //     name: 'niuke',
        //     component: () => import('../views/niuke.vue')
        // },
        {
            path: '/zdk',
            name: 'zdk',
            component: () => import('../views/zdk.vue')
        },
        {
            path: '/login',
            name: 'login',
            component:  () => import('../views/login.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('../views/notFound.vue')
        }

    ]
})

export default router

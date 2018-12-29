import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
        },
        {
            path: '/',
            meta: { requiresAuth: true },
            name: 'home',
            redirect: { name: 'index' },
            component: () => import('../views/router-view.vue'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
                },
                {
                    path: 'about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
                },
            ],
        },
    ],
});

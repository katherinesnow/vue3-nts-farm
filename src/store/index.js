import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
// import http from '@/config/http';
// import api from '@/constants/api';
// import STATUS from '@/constants/status';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {
    },
    actions: {
    },
    modules: {
        user: user.result,
    },
});

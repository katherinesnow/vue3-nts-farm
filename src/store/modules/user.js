import Vue from 'vue';
import { completeModule } from '@/shared/smc';
import http from '@/config/http';
import api from '@/constants/api';
import Cookie from 'js-cookie';
import STATUS from '@/constants/status';

export default completeModule({
    namespace: 'user',
    mapTypesToModule: [
        'SET_USER_INFO',
        'DO_LOGIN',
        'DO_LOGOUT',
    ],
    mapTargetsToModule: [],
    mapDefinitionToModule(types) {
        return {
            state: {

            },
            getters: {

            },
            mutations: {
                [types.SET_USER_INFO](state, payload) {
                    if (payload) {
                        Vue.set(state, 'userInfo', payload)
                    } else {
                        Vue.delete(state, 'userInfo')
                    }
                },
            },
            actions: {
                [types.DO_LOGIN]({ commit, state, dispatch }, loginData) {
                    console.log(dispatch, state, '====用户登录ACTIONS====')
                    return http.post(api.LOGIN, loginData).then((data) => {
                        if (data.resultCode === STATUS.OK) {
                            const { userData, token } = data.resultData;
                            Cookie.set('userInfo', userData, { expires: 1 });
                            Cookie.set('token', token, { expires: 1 });
                            localStorage.setItem('proId', userData.projectId);
                            commit(types.SET_USER_INFO, userData);
                        } else {
                            commit(types.SET_USER_INFO, null);
                        }
                        return data
                    });
                },
                [types.DO_LOGOUT]({ commit, state }) {
                    console.log(state)
                    return Promise.resolve().then(() => {
                        Cookie.remove('userInfo');
                        Cookie.remove('token');
                        localStorage.removeItem('proId');
                        commit(types.SET_USER_INFO, null);
                    });
                },
            },
        }
    },
});

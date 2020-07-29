import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        urlsList: []
    },
    mutations: {
        addLink (state, link) {
            state.urlsList.push(link)
        },
        resetLinks (state) {
            state.urlsList = []
        }
    },
    actions: {
        resetLinks ({commit}) {
            commit('resetLinks');
        } 
    }
})
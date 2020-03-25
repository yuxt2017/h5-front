import Vue from 'vue';
import Vuex from 'vuex';
// import permission from './modules/permission'
import user from './modules/user';
import getters from './getters';
import moment from './modules/moment';

Vue.use(Vuex);
// vuex 主要是负责通信的

const store = new Vuex.Store({
  modules: {
    // permission,
    user,
    moment,
  },
  getters,
});

export default store;


import Vue from 'vue'
import Vuex from 'vuex'
import test2 from '@/store/modules/test2'
import user from '@/store/modules/user'
import { getModule } from 'vuex-module-decorators';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
const store =new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setUserNames(state){
      state.count++
    }
  },
  actions: {
  },
  modules: {
    test2,
    user
  },
  plugins: [
    createPersistedState({
            storage: window.localStorage
        })
    ]
}

)

export default store

export const test2Module = getModule(test2,store);
export const userModule = getModule(user,store);

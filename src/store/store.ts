import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree, StoreOptions, Getter, Store } from 'vuex';

Vue.use(Vuex);

interface RootState {
  apiKey: string
}



const state: RootState = {
  apiKey: ""
}

const getters: GetterTree<RootState, RootState> =
{
    getApiKey: (state: RootState): string => {
      return state.apiKey
    }
  }

const mutations: MutationTree<RootState> = {
  add(state: RootState, apiKey: string){
    state.apiKey = apiKey
  }
}

const actions: ActionTree<RootState, RootState> = {
  addApiKey({ commit }, apiKey:string){
    commit('add', apiKey)
  }
}

const options: StoreOptions<RootState> = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}

const store : Store<RootState> = new Vuex.Store(options);

export default store;

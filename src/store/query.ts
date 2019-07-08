// import { MutationTree, ActionTree, GetterTree, ModuleTree } from 'vuex';
// import { Module } from 'vuex'


// interface QueryRootState {
//   apiKey: string
// }

// const state: QueryRootState = {
//   apiKey: ""
// }

// const getters: GetterTree<QueryRootState, QueryRootState> =
// {
//     getApiKey: (state, getters, rootState): string => {
//       return state.apiKey
//     }
//   }

// const mutations: MutationTree<QueryRootState> = {
//   add(state, apiKey: string){
//     state.apiKey = apiKey
//   }
// }

// const actions: ActionTree<QueryRootState, QueryRootState> = {
//   addApiKey({ commit, state }, apiKey:string){
//     commit('add', apiKey)
//   }
// }

// export default {
//     namespaced: true,
//     state,
//     getters,
//     actions,
//     mutations
// }


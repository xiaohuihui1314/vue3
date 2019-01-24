const state = {
  menuListCache: ['home']
};
// getters
const getters = {
  menuListCache: state => state.menuListCache
};
const actions = {
  addMenuCache ({ commit }, menu) {
    commit("add_Menu_Cache", menu)
  },
  deleteMenuCache ({ commit }, menu) {
    commit("delete_Menu_Cache", menu)
  },
};
// mutations
const mutations = {
  add_Menu_Cache (state, menu) {
    state.menuListCache.push(menu);
  },
  delete_Menu_Cache (state, menu) {
    const index = state.menuListCache.indexOf(menu)
    state.menuListCache.splice(index, 1)
  },
};
export default {
  state,
  getters,
  actions,
  mutations
}

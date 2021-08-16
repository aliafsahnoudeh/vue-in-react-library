import Vuex from "vuex";

export default (vueLib: any) => {
  vueLib.use(Vuex);

  const vuex = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      someAction({ commit }: any): void {
        alert('some vuex action')
      },
    },
    modules: {},
  });

  return vuex;
};

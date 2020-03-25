/* tslint-disable */
const user = {
  state: {
    name: '',
    userId: '',
  },

  // 使用  commit('SET_NAME', 'xxxxx')
  mutations: {
    SET_NAME: (state: any, name: any) => {
      state.name = name;
    },
    SET_USER_ID: (state: any, userId: any) => {
      state.userId = userId;
    },
  },

  actions: {
    fn({ commit, state }: any, data: any) {
      // console.log(state);
    },

  },
};

export default user;


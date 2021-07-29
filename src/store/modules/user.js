import { login, register } from '@/api/user';

const getDefaultState = () => {
  return {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_USER: (state, userInfo) => {
    state.userInfo = userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  },
};

const actions = {
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      register(data)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      login(data)
        .then((data) => {
          commit('SET_USER', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

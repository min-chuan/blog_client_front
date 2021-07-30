import { getArticleList } from '@/api/article';

const getDefaultState = () => {
  return {
    articleList: [],
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_ARTICLE_LIST: (state, articleList) => {
    state.articleList = articleList;
  }
};

const actions = {
  getArticleList({ commit }, data) {
    return getArticleList(data).then((data) => {
      commit('SET_ARTICLE_LIST', data);
    })
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

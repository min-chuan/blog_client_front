import Network from './network';

export const getArticleList = () => Network.get('/api/v1/article/list');

export default {
  getArticleList
};

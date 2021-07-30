import axios from 'axios';
import { Message } from 'element-ui';

/* axios全局配置 */
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true; // 让axios发送请求的时候带上cookie

/* axios请求拦截 */
axios.interceptors.request.use(
  function (config) {
    /* 在发送请求之前做些什么 */
    return config;
  },
  function (error) {
    /* 对请求错误做些什么 */
    return Promise.reject(error);
  }
);

/* axios响应拦截 */
axios.interceptors.response.use(
  function (response) {
    /* 对响应数据做点什么 (status: 2xx) */
    return response.data;
  },
  function (error) {
    /* 对响应错误做点什么 (status: 除2xx) */
    Message.error(error.response.data.message);
    return Promise.reject(error);
  }
);

// 封装自己的get/post方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios
        .get(path, {
          params: data,
        })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios
        .post(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  delete: function (path = '') {
    return new Promise(function (resolve, reject) {
      axios
        .delete(path)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  put: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios
        .put(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  all: function (list) {
    return new Promise(function (resolve, reject) {
      axios
        .all(list)
        .then(
          axios.spread(function (...result) {
            // 两个请求现在都执行完成
            resolve(result);
          })
        )
        .catch(function (err) {
          reject(err);
        });
    });
  },
};

import axios from 'axios';
const setupHttp = () => {
  /** http实例 */
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  /** 请求拦截器 */
  instance.interceptors.request.use((config) => {
    const headers = config.headers || {};
    headers['Content-Type'] = 'application/json';
    headers['token'] = '123456';
    return config;
  });

  /** 响应拦截器 */
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const http = setupHttp();

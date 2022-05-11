import { AxiosError } from 'axios';
import HttpClient from './HttpClient';
import { IManifest } from './meta';
export function setupAxios(options: IManifest) {
  HttpClient.instance.defaults.baseURL = options.baseURL;
  HttpClient.instance.defaults.timeout = options.timeout;
  // 多加一个拦截器，新加的会优先执行
  HttpClient.instance.interceptors.request.use((config) => {
    config = Object.assign(options.request(config), config);
    return config;
  });
  HttpClient.instance.interceptors.response.use(
    undefined,
    (error: AxiosError) => {
      options.response && options.response(error);
      return Promise.reject(error);
    },
  );
}

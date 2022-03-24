import { AxiosError } from 'axios';
import { http } from './http';
import { IManifest } from './meta';
export function setupAxios(options: IManifest) {
  http.defaults.baseURL = options.baseURL;
  http.defaults.timeout = options.timeout;
  // 多加一个拦截器，新加的会优先执行
  http.interceptors.request.use((config) => {
    config = Object.assign(options.request(config), config);
    return config;
  });
  http.interceptors.response.use(undefined, (error: AxiosError) => {
    options.response && options.response(error);
    return Promise.reject(error);
  });
}

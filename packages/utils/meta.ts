import { AxiosRequestConfig, AxiosError } from 'axios';
export interface IManifest {
  baseURL: string;
  appName?: string;
  timeout?: number;
  request: (config: AxiosRequestConfig) => AxiosRequestConfig;
  response?: (err: AxiosError) => void;
}
// export const manifest: IManifest = {

// };

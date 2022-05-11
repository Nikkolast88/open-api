import { createApp } from 'vue';
import App from './App.vue';
import { setupAxios, login } from '@open-api/core';
login({ loginName: 'drg1', authPass: 'og8X3D' }).then((resp) => {
  console.log(resp.data);
});
setupAxios({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
  request: (config) => {
    config.headers;
    return config;
  },
  response: (response) => {
    response.code;
  },
});
createApp(App).mount('#app');

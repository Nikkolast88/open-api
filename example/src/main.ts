import { createApp } from 'vue';
import App from './App.vue';
import { setupAxios, login } from '@openapi/core';
login({ username: 'admin', password: 'admin' }).then((resp) => {
  console.log(resp);
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

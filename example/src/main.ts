import { createApp } from 'vue';
import App from './App.vue';
import { setupAxios } from '@openapi/core';
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

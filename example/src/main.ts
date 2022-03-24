import { createApp } from 'vue';
import App from './App.vue';
import { setupAxios } from '@openapi/core';
setupAxios({
  baseURL: 'http://localhost:8080/api',
});
createApp(App).mount('#app');

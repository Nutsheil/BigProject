import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8008' : 'production';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '';
  }
  return config;
});

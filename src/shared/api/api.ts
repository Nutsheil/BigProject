import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8008' : 'production';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
  },
});

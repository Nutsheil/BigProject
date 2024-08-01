import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from 'entities/User';
import { userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData: ILoginByUsername, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8008/login', authData);

      if (!response.data) throw new Error();

      thunkAPI.dispatch(userActions.setAuthData(response.data));

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);

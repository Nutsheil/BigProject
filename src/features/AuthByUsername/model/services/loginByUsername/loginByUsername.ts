import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/StoreProvider';
import type { IUser } from 'entities/User';
import { userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData: ILoginByUsername, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<IUser>('/login', authData);

      if (!response.data) throw new Error();

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

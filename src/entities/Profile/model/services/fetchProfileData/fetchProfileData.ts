import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/StoreProvider';
import type { IProfile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IProfile>('/profile');

      if (!response.data) {
        return rejectWithValue('error');
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

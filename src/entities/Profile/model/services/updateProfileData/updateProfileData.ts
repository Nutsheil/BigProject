import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import type { IProfile } from '../../types/profileSchema';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const profileForm = getProfileForm(getState());

    try {
      const response = await extra.api.put<IProfile>('/profile', profileForm);

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

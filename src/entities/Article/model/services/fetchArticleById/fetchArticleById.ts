import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/StoreProvider';
import type { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IArticle>(`/articles/${id}`);

      if (!response.data) {
        return rejectWithValue('error');
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

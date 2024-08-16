import type { ArticleDetailsSchema } from 'entities/Article';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { testArticle } from 'entities/Article/model/const/testArticle';

describe('articleDetailsSlice', () => {
  test('fetchArticleById service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({ isLoading: true });
  });

  test('fetchArticleById service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(testArticle, '', '1')),
    ).toEqual({
      isLoading: false,
      data: testArticle,
    });
  });

  test('fetchArticleById service rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected(null, '', '1', 'error')),
    ).toEqual({ error: 'error', isLoading: false });
  });
});

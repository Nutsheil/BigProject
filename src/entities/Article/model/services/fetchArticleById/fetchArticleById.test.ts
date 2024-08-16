import { TestAsyncThunk } from 'shared/config/tests';
import { testArticle } from '../../const/testArticle';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
  test('success fetch article data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: testArticle }));
    const result = await thunk.call(testArticle.id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(testArticle);
  });

  test('error fetch article data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.call('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});

import axios from 'axios';
import type { IUser } from 'entities/User';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/config/tests';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue: IUser = { id: '1', username: 'user' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.call({ username: 'user', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.call({ username: 'user', password: '123' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});

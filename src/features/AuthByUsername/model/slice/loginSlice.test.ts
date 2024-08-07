import type { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', async () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('user'))).toEqual({ username: 'user' });
  });

  test('test set password', async () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('user'))).toEqual({ password: 'user' });
  });
});

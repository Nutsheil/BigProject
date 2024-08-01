import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import type { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReduces: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReduces,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

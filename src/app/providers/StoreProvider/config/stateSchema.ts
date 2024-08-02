import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import type { CounterSchema } from 'entities/Counter';
import type { UserSchema } from 'entities/User';
import type { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers:
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: IReducerManager;
}

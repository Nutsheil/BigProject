import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { StateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProvider {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: IStoreProvider) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return <Provider store={store}>{children}</Provider>;
};

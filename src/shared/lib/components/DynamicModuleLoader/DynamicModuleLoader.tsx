import { useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch, useStore } from 'react-redux';
import type { Reducer } from '@reduxjs/toolkit';
import type { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IDynamicModuleLoader {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = props => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, value]: ReducersListEntry) => {
      store.reducerManager.add(key, value);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

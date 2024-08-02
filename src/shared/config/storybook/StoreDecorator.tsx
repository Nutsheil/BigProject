import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import type { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) =>
  function decorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
  };

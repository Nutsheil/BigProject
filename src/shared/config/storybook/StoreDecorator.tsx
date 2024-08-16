import type { StoryFn } from '@storybook/react';
import type { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  function decorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
  };

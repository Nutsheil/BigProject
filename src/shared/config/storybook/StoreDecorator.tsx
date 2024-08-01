import type { DeepPartial } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import type { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state?: DeepPartial<StateSchema>) =>
  function decorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };

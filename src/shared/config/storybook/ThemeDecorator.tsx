import type { StoryFn } from '@storybook/react';
import type { Theme } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) =>
  function decorator(StoryComponent: StoryFn) {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };

import type { StoryFn } from '@storybook/react';
import type { Theme } from 'app/provider/ThemeProvider';
import { ThemeProvider } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) =>
  function decorator(StoryComponent: StoryFn) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };

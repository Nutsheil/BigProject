import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, CenterDecorator } from 'shared/config/storybook';
import { Button, ButtonSize, ButtonTheme } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

export const Default: Story = {
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [CenterDecorator],
};

export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const ClearPurple: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const ClearInvertedDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const ClearInvertedPurple: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator],
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OutlinePurple: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const OutlineRed: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
  },
  decorators: [CenterDecorator],
};

export const OutlineRedDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OutlineRedPurple: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [CenterDecorator],
};

export const BackgroundDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const BackgroundPurple: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const BackgroundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const BackgroundInvertedPurple: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [CenterDecorator],
};

export const DisabledDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const DisabledPurple: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Square: Story = {
  args: {
    children: '>',
    squared: true,
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator],
};

export const SizeM: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const SizeL: Story = {
  args: {
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const SizeXL: Story = {
  args: {
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

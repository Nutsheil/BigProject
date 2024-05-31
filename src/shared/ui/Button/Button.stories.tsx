import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { ThemeDecorator, CenterDecorator } from 'shared/config/storybook';
import { Button, ButtonSize, ButtonTheme } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Button',
  },
  decorators: [CenterDecorator],
};

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [CenterDecorator],
};

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator],
};

export const Background: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [CenterDecorator],
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
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
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const SizeL: Story = {
  args: {
    children: 'Button',
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const SizeXL: Story = {
  args: {
    children: 'Button',
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator],
};

export const DefaultDark: Story = {
  args: {
    children: 'Button',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const BackgroundDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const BackgroundInvertedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SquareDark: Story = {
  args: {
    children: '>',
    squared: true,
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SizeMDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SizeLDark: Story = {
  args: {
    children: 'Button',
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SizeXLDark: Story = {
  args: {
    children: 'Button',
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

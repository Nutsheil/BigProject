import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { ThemeDecorator, CenterDecorator } from 'shared/config/storybook';
import { Button, ButtonTheme } from './Button';

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

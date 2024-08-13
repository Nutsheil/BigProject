import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { AppLink } from './AppLink';

type Story = StoryObj<typeof AppLink>;

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'AppLink',
  },
};

export default meta;

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
  decorators: [CenterDecorator],
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
  decorators: [CenterDecorator],
};

export const PrimaryDark: Story = {
  args: {
    theme: 'primary',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    theme: 'secondary',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const PrimaryPurple: Story = {
  args: {
    theme: 'primary',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const SecondaryPurple: Story = {
  args: {
    theme: 'secondary',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

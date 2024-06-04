import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { AppLink, AppLinkTheme } from './AppLink';

type Story = StoryObj<typeof AppLink>;

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
};

export default meta;

export const Primary: Story = {
  args: {
    children: 'AppLink',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [CenterDecorator],
};

export const Secondary: Story = {
  args: {
    children: 'AppLink',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [CenterDecorator],
};

export const PrimaryDark: Story = {
  args: {
    children: 'AppLink',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: 'AppLink',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

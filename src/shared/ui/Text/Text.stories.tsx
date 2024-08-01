import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;

export const Light: Story = {
  args: { title: 'title light', text: 'text light' },
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  args: { title: 'title dark', text: 'text dark' },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const ErrorLight: Story = {
  args: { title: 'error light', text: 'text light', theme: TextTheme.ERROR },
  decorators: [CenterDecorator],
};

export const ErrorDark: Story = {
  args: { title: 'error dark', text: 'text dark', theme: TextTheme.ERROR },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleLight: Story = {
  args: { title: 'only title light' },
  decorators: [CenterDecorator],
};

export const OnlyTextLight: Story = {
  args: { text: 'only text light' },
  decorators: [CenterDecorator],
};

export const OnlyTitleDark: Story = {
  args: { title: 'only title dark' },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: { text: 'only text dark' },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

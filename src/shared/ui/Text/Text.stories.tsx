import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

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

export const Purple: Story = {
  args: { title: 'title purple', text: 'text purple' },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const ErrorLight: Story = {
  args: { title: 'error light', text: 'text light', theme: 'error' },
  decorators: [CenterDecorator],
};

export const ErrorDark: Story = {
  args: { title: 'error dark', text: 'text dark', theme: 'error' },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const ErrorPurple: Story = {
  args: { title: 'error dark', text: 'text dark', theme: 'error' },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Center: Story = {
  args: { title: 'title center', text: 'text center', align: 'center' },
  decorators: [CenterDecorator],
};

export const Right: Story = {
  args: { title: 'title right', text: 'text tight', align: 'right' },
  decorators: [CenterDecorator],
};

export const OnlyTitle: Story = {
  args: { title: 'only title' },
  decorators: [CenterDecorator],
};

export const OnlyText: Story = {
  args: { text: 'only text' },
  decorators: [CenterDecorator],
};

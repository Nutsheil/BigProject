import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

type Story = StoryObj<typeof ThemeSwitcher>;

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
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

import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

type Story = StoryObj<typeof LangSwitcher>;

const meta: Meta<typeof LangSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
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

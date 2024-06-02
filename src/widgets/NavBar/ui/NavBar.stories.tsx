import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/provider/ThemeProvider';
import { NavBar } from './NavBar';

type Story = StoryObj<typeof NavBar>;

const meta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,
};

export default meta;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

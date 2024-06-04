import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

type Story = StoryObj<typeof SideBar>;

const meta: Meta<typeof SideBar> = {
  title: 'widgets/SideBar',
  component: SideBar,
};

export default meta;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

type Story = StoryObj<typeof SideBar>;

const meta: Meta<typeof SideBar> = {
  title: 'widgets/SideBar',
  component: SideBar,
};

export default meta;

export const Default: Story = {
  decorators: [StoreDecorator()],
};

export const Dark: Story = {
  decorators: [StoreDecorator(), ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [StoreDecorator(), ThemeDecorator(Theme.PURPLE)],
};

export const Auth: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} },
    }),
  ],
};

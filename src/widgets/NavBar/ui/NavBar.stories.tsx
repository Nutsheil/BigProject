import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';

type Story = StoryObj<typeof NavBar>;

const meta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,
};

export default meta;

export const Light: Story = {
  decorators: [StoreDecorator()],
};

export const Dark: Story = {
  decorators: [StoreDecorator(), ThemeDecorator(Theme.DARK)],
};

export const LoggedLight: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'user',
        },
      },
    }),
  ],
};

export const LoggedDark: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'user',
        },
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

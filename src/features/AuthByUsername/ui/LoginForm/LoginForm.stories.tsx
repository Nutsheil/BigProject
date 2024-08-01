import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;

export const Light: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        username: 'user',
        password: '123',
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        username: 'user',
        password: '123',
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const LoadingLight: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};

export const LoadingDark: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const WithErrorLight: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        username: 'user',
        password: '123',
        error: 'Error',
      },
    }),
  ],
};

export const WithErrorDark: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        username: 'user',
        password: '123',
        error: 'Error',
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

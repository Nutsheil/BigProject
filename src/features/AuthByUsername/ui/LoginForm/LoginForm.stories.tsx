import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import type { LoginSchema } from 'features/AuthByUsername';
import LoginForm from './LoginForm';

const loginData: LoginSchema = {
  username: 'Nutshell',
  password: '123',
  isLoading: false,
};

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;

export const Default: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: loginData,
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: loginData,
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const Purple: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: loginData,
    }),
    ThemeDecorator(Theme.PURPLE),
  ],
};

export const Loading: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};

export const WithError: Story = {
  decorators: [
    CenterDecorator,
    StoreDecorator({
      loginForm: {
        ...loginData,
        error: 'Error',
      },
    }),
  ],
};

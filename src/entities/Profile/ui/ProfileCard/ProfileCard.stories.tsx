import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import type { IProfile } from '../../model/types/profileSchema';
import { ProfileCard } from './ProfileCard';

const profileData: IProfile = {
  firstName: 'Евгений',
  lastName: 'Редченко',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB,
  username: 'Nutshell',
  avatar: AvatarImg,
};

type Story = StoryObj<typeof ProfileCard>;

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;

export const Default: Story = {
  args: {
    readonly: true,
    data: profileData,
  },
};

export const Dark: Story = {
  args: {
    readonly: true,
    data: profileData,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  args: {
    readonly: true,
    data: profileData,
  },
  decorators: [ThemeDecorator(Theme.PURPLE)],
};

export const Empty: Story = {
  args: {
    readonly: true,
  },
};

export const Editable: Story = {
  args: {
    readonly: false,
    data: profileData,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    readonly: true,
  },
};

export const WithError: Story = {
  args: {
    readonly: true,
    error: 'error',
  },
};

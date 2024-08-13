import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import type { IProfile } from 'entities/Profile';
import ProfilePage from './ProfilePage';

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

type Story = StoryObj<typeof ProfilePage>;

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;

export const Default: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: profileData,
        readonly: true,
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: profileData,
        readonly: true,
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const Purple: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: profileData,
        readonly: true,
      },
    }),
    ThemeDecorator(Theme.PURPLE),
  ],
};

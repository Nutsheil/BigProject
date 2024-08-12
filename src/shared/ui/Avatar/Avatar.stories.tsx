import { Avatar } from 'shared/ui/Avatar/Avatar';
import type { StoryObj, Meta } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';
import AvatarImg from 'shared/assets/tests/avatar.jpg';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {},
};

export default meta;

export const Primary: Story = {
  args: {
    size: 100,
    src: AvatarImg,
  },
  decorators: [CenterDecorator],
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
  decorators: [CenterDecorator],
};

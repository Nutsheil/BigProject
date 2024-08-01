import type { StoryObj, Meta } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';
import { Input } from './Input';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;

export const Empty: Story = {
  decorators: [CenterDecorator],
};

export const WithValue: Story = {
  args: {
    value: 'Input',
  },
  decorators: [CenterDecorator],
};

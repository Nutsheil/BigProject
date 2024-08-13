import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Input } from './Input';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;

export const Light: Story = {
  args: {
    value: 'Input',
  },
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  args: {
    value: 'Input',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  args: {
    value: 'Input',
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const Readonly: Story = {
  args: {
    value: 'Input',
    readonly: true,
  },
  decorators: [CenterDecorator],
};

export const Empty: Story = {
  decorators: [CenterDecorator],
};

export const Placeholder: Story = {
  args: {
    placeholder: 'placeholder',
  },
  decorators: [CenterDecorator],
};

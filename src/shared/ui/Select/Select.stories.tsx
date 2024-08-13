import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const label = 'Укажите значение';
const options = [
  { value: '1', content: 'Первый пункт' },
  { value: '2', content: 'Второй пункт' },
];

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {
    options,
  },
};

export default meta;

export const Light: Story = {
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const WithLabelLight: Story = {
  args: { label },

  decorators: [CenterDecorator],
};

export const WithLabelDark: Story = {
  args: { label },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const WithLabelPurple: Story = {
  args: { label },
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

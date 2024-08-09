import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;

const label = 'Укажите значение';
const options = [
  { value: '1', content: 'Первый пункт' },
  { value: '2', content: 'Второй пункт' },
];

export const Light: Story = {
  args: { options },
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  args: { options },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const WithLabelLight: Story = {
  args: { label, options },

  decorators: [CenterDecorator],
};

export const WithLabelDark: Story = {
  args: { label, options },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

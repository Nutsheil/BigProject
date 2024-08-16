import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import TestIcon from 'shared/assets/tests/icon.svg';
import { Icon } from './Icon';

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  args: {
    Svg: TestIcon,
  },
};

export default meta;

export const Default: Story = {
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

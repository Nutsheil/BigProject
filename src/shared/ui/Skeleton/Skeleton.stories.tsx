import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

type ISkeleton = ComponentProps<typeof Skeleton>;

const defaultArgs: ISkeleton = {
  width: '90%',
  height: '300px',
};

const circleArgs: ISkeleton = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    width: '90%',
    height: '300px',
  },
};

export default meta;

export const Light: Story = {
  args: defaultArgs,
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  args: defaultArgs,
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  args: defaultArgs,
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

export const CircleLight: Story = {
  args: circleArgs,
  decorators: [CenterDecorator],
};

export const CircleDark: Story = {
  args: circleArgs,
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const CirclePurple: Story = {
  args: circleArgs,
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};

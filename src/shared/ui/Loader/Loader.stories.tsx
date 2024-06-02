import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/provider/ThemeProvider';
import { Loader } from './Loader';

type Story = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
};

export default meta;

export const Light: Story = {
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

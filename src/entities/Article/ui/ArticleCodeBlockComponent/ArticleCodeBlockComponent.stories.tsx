import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const text = `export const Default: Story = {
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [CenterDecorator, ThemeDecorator(Theme.PURPLE)],
};`;

type Story = StoryObj<typeof ArticleCodeBlockComponent>;

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: text,
    },
  },
};

export default meta;

export const Default: Story = {
  decorators: [CenterDecorator, StoreDecorator()],
};

export const Dark: Story = {
  decorators: [CenterDecorator, StoreDecorator(), ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [CenterDecorator, StoreDecorator(), ThemeDecorator(Theme.PURPLE)],
};

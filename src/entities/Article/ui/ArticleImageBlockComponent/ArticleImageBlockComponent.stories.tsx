import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

type Story = StoryObj<typeof ArticleImageBlockComponent>;

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'entities/Article/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Hello world!',
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

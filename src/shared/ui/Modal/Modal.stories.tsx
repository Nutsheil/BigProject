import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;

export const Light: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit provident vel qui voluptates eligendi odio modi optio. Dicta minus deserunt, voluptates illo modi porro repellat temporibus eaque nesciunt laboriosam culpa iusto odio debitis natus quasi accusamus quod omnis quo, aut maiores laudantium? Eaque eveniet quo inventore, ipsam neque commodi porro suscipit aliquam voluptatum perspiciatis blanditiis autem ipsa debitis sunt nulla numquam veritatis repellat fuga. Totam sunt animi omnis reprehenderit, ratione ipsa voluptates exercitationem aperiam iste, eligendi perferendis minus reiciendis laboriosam unde eum veritatis temporibus illum expedita accusamus saepe! Delectus quasi necessitatibus possimus hic nobis est excepturi amet, quis vitae?',
    isOpen: true,
  },
  decorators: [CenterDecorator],
};

export const Dark: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit provident vel qui voluptates eligendi odio modi optio. Dicta minus deserunt, voluptates illo modi porro repellat temporibus eaque nesciunt laboriosam culpa iusto odio debitis natus quasi accusamus quod omnis quo, aut maiores laudantium? Eaque eveniet quo inventore, ipsam neque commodi porro suscipit aliquam voluptatum perspiciatis blanditiis autem ipsa debitis sunt nulla numquam veritatis repellat fuga. Totam sunt animi omnis reprehenderit, ratione ipsa voluptates exercitationem aperiam iste, eligendi perferendis minus reiciendis laboriosam unde eum veritatis temporibus illum expedita accusamus saepe! Delectus quasi necessitatibus possimus hic nobis est excepturi amet, quis vitae?',
    isOpen: true,
  },
  decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

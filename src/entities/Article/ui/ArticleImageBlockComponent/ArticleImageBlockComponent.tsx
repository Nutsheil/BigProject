import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import type { IArticleImageBlock } from '../../model/types/article';
import classes from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponent {
  block: IArticleImageBlock;
  className?: string;
}

export const ArticleImageBlockComponent = memo((props: IArticleImageBlockComponent) => {
  const { block, className } = props;

  return (
    <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align='center' />}
    </div>
  );
});
ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';

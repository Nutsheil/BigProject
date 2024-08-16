import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import type { IArticleTextBlock } from '../../model/types/article';
import classes from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponent {
  block: IArticleTextBlock;
  className?: string;
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponent) => {
  const { block, className } = props;

  return (
    <div className={classNames(classes.ArticleTextBlockComponent, {}, className)}>
      {block.title && <Text title={block.title} className={classes.title} />}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} className={classes.paragraph} />
      ))}
    </div>
  );
});
ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';

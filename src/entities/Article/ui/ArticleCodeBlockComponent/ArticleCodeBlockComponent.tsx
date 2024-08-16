import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Code } from 'shared/ui/Code';
import type { IArticleCodeBlock } from '../../model/types/article';
import classes from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponent {
  block: IArticleCodeBlock;
  className?: string;
}

export const ArticleCodeBlockComponent = memo((props: IArticleCodeBlockComponent) => {
  const { block, className } = props;

  return (
    <div className={classNames(classes.ArticleCodeBlockComponent, {}, className)}>
      <Code text={block.code} />
    </div>
  );
});
ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';

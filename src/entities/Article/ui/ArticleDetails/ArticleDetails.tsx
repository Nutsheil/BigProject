import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import type { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import classes from './ArticleDetails.module.scss';

const initialReducers: ReducersList = { articleDetails: articleDetailsReducer };

interface IArticleDetails {
  id: string;
}

export const ArticleDetails = memo((props: IArticleDetails) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article-details');

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={classes.block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={classes.block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={classes.block} />;
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Skeleton width='200px' height='200px' borderRadius='50%' className={classes.avatar} />
        </div>
        <Skeleton width='300px' height='32px' className={classes.title} />
        <Skeleton width='600px' height='24px' className={classes.skeleton} />
        <Skeleton width='100%' height='300px' className={classes.skeleton} />
        <Skeleton width='100%' height='300px' className={classes.skeleton} />
        <Skeleton width='100%' height='300px' className={classes.skeleton} />
      </>
    );
  } else if (error) {
    content = <Text title={t('Произошла ошибка при загрузке статьи')} theme='error' align='center' />;
  } else {
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Avatar src={article?.img} size={200} />
        </div>
        <Text title={article?.title} text={article?.subtitle} size='l' className={classes.title} />
        <div className={classes.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={article?.views.toString()} />
        </div>
        <div className={classes.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classes.ArticleDetails}>{content}</div>
    </DynamicModuleLoader>
  );
});
ArticleDetails.displayName = 'ArticleDetails';

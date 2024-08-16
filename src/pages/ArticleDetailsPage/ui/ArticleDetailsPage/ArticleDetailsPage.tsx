import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text';

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');

  if (__PROJECT__ === 'storybook') {
    return <ArticleDetails id='1' />;
  }

  if (!id) {
    return (
      <div>
        <Text title={t('Статья не найдена')} />
      </div>
    );
  }

  return <ArticleDetails id={id} />;
};

export default memo(ArticleDetailsPage);

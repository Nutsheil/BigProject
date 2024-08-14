import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{t('Статья')}</h1>
    </div>
  );
};

export default memo(ArticleDetailsPage);

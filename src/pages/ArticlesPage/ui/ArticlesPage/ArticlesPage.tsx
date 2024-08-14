import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{t('Статьи')}</h1>
    </div>
  );
};

export default memo(ArticlesPage);

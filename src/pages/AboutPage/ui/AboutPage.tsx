import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{t('О сайте')}</h1>
    </div>
  );
};

export default memo(AboutPage);

import { CrashButton } from 'app/provider/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <CrashButton />
    </div>
  );
};

export default MainPage;

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const CrashButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const crash = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={crash}>{t('Crash this')}</Button>;
};

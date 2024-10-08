import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import classes from './PageError.module.scss';

export const PageError = memo(() => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classes.PageError}>
      <Text size='l' align='center' title={t('Произошла непредвиденная ошибка')} />
      <Button onClick={reloadPage} className={classes.button}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
});
PageError.displayName = 'PageError';

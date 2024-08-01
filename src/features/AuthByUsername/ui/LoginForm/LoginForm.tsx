import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import classes from './LoginForm.module.scss';

interface ILoginForm {
  className?: string;
}

export const LoginForm = ({ className }: ILoginForm) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm, {}, className)}>
      <Input type='text' className={classes.input} placeholder={t('Логин')} autoFocus />
      <Input type='text' className={classes.input} placeholder={t('Пароль')} />
      <Button className={classes.loginButton}>{t('Войти')}</Button>
    </div>
  );
};

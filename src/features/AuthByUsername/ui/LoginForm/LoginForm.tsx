import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import classes from './LoginForm.module.scss';

interface ILoginForm {
  className?: string;
}

export const LoginForm = memo(({ className }: ILoginForm) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LoginForm, {}, className)}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={t('Неправильный логин иои пароль')} />}
      <Input
        type='text'
        className={classes.input}
        value={username}
        onChange={onChangeUsername}
        placeholder={t('Логин')}
        autoFocus
      />
      <Input
        type='text'
        className={classes.input}
        value={password}
        onChange={onChangePassword}
        placeholder={t('Пароль')}
      />
      <Button theme={ButtonTheme.OUTLINE} className={classes.loginButton} onClick={onLoginClick} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
});
LoginForm.displayName = 'LoginForm';

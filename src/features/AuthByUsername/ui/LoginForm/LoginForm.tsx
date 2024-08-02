import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

export interface ILoginForm {
  className?: string;
}

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm = memo(({ className }: ILoginForm) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});
LoginForm.displayName = 'LoginForm';

export default LoginForm;

import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classes from './NavBar.module.scss';

interface INavBar {
  className?: string;
}

export const NavBar = memo(({ className }: INavBar) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, className)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={classes.links} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, {}, className)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classes.links} onClick={onOpenAuthModal}>
        {t('Войти')}
      </Button>
      {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />}
    </div>
  );
});
NavBar.displayName = 'NavBar';

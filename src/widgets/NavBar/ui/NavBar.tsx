import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classes from './NavBar.module.scss';

interface INavBar {
  className?: string;
}

export const NavBar = ({ className }: INavBar) => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, className)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classes.links} onClick={onOpenAuthModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />
    </div>
  );
};

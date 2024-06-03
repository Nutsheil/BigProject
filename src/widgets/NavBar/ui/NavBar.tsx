/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import classes from './NavBar.module.scss';

interface INavBar {
  className?: string;
}

export const NavBar = ({ className }: INavBar) => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModalOpen(prev => !prev);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, className)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classes.links} onClick={onToggleAuthModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum natus consectetur atque aliquid
        dolorem! Tenetur modi rerum quam quod a ex quisquam excepturi nulla, magnam deleniti nostrum! Minus iste
        laboriosam, recusandae dolorum, rem vitae officia molestiae quasi adipisci voluptatem accusantium illum, modi
        labore earum at. Sapiente atque aliquam maxime a animi excepturi? Maxime enim id porro quae pariatur omnis qui,
        debitis quas assumenda officia quia molestias accusantium labore odit eos distinctio? Nemo cumque harum, eaque
        non rerum, odio optio iure minima labore quaerat incidunt commodi eveniet, laboriosam placeat eligendi. Quo
        minus fuga officiis velit quasi atque nobis aliquid! Mollitia?
      </Modal>
    </div>
  );
};

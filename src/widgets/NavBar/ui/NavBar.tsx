import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames';
import classes from './NavBar.module.scss';

interface INavBar {
	className?: string;
}

export const NavBar = ({ className }: INavBar) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.Navbar, {}, className)}>
      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classes.mainLink}>{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/About">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};

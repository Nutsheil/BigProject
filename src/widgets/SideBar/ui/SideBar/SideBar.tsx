import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { routePaths } from 'shared/config/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import classes from './SideBar.module.scss';

interface ISideBar {
  className?: string;
}

export const SideBar = ({ className }: ISideBar) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(classes.SideBar, { [classes.collapsed]: collapsed }, className)}>
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        squared
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classes.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routePaths.main} className={classes.item}>
          <MainIcon className={classes.icon} />
          <span className={classes.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routePaths.about} className={classes.item}>
          <AboutIcon className={classes.icon} />
          <span className={classes.link}>{t('О сайте')}</span>
        </AppLink>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} short={collapsed} />
      </div>
    </div>
  );
};

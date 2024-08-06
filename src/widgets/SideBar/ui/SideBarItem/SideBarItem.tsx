import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import type { ISideBarItem } from '../../model/items';
import classes from './SideBarItem.module.scss';

interface ISideBarItemProps {
  item: ISideBarItem;
  collapsed: boolean;
}

export const SideBarItem = memo((props: ISideBarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(classes.SideBarItem, { [classes.collapsed]: collapsed })}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}>{t(item.text)}</span>
    </AppLink>
  );
});
SideBarItem.displayName = 'SideBarItem';

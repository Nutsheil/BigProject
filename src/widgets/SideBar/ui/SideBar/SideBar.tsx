import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { sideBarItemsList } from '../../model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import classes from './SideBar.module.scss';

interface ISideBar {
  className?: string;
}

export const SideBar = memo(({ className }: ISideBar) => {
  const [collapsed, setCollapsed] = useState(false);

  const itemsList = useMemo(
    () =>
      sideBarItemsList.map(sideBarItem => (
        <SideBarItem item={sideBarItem} collapsed={collapsed} key={sideBarItem.path} />
      )),
    [collapsed],
  );

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

      <div className={classes.items}>{itemsList}</div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} short={collapsed} />
      </div>
    </div>
  );
});
SideBar.displayName = 'SideBar';

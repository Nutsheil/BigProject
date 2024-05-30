import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import classes from './SideBar.module.scss';

interface ISideBar {
	className?: string;
}

export const SideBar = ({ className }: ISideBar) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.SideBar, { [classes.collapsed]: collapsed }, className)}
    >
      <button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
      >
        -
      </button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};

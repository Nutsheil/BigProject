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
    <div className={classNames(classes.SideBar, { [classes.collapsed]: collapsed }, className)}>
      <button type="button" onClick={onToggle}>Toggle</button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};

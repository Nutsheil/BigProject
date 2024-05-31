import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLink> = props => {
  const { children, className, theme = AppLinkTheme.PRIMARY, to, ...otherProps } = props;

  return (
    <Link className={classNames(classes.AppLink, {}, [className, classes[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

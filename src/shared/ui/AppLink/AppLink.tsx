import type { ReactNode } from 'react';
import { memo } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import classes from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

interface IAppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: IAppLink) => {
  const { children, className, theme = 'primary', to, ...otherProps } = props;

  return (
    <Link className={classNames(classes.AppLink, {}, [className, classes[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
});
AppLink.displayName = 'AppLink';

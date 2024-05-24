import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames';
import classes from './NavBar.module.scss';

interface INavBar {
	className?: string;
}

export const NavBar = ({ className }: INavBar) => (
  <div className={classNames(classes.Navbar, {}, className)}>
    <div className={classes.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classes.mainLink}>Home</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/About">About</AppLink>
    </div>
  </div>
);

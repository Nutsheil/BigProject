import { classNames } from 'shared/lib/classNames';
import classes from './NavBar.module.scss';

interface INavBar {
  className?: string;
}

export const NavBar = ({ className }: INavBar) => <div className={classNames(classes.Navbar, {}, className)} />;

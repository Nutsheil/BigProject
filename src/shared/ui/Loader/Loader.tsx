import { classNames } from 'shared/lib/classNames';
import classes from './Loader.module.scss';

interface ILoader {
	className?: string;
}

export const Loader = ({ className }: ILoader) => (
  <div className={classNames(classes.Loader, {}, className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

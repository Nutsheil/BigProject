import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Loader.module.scss';

interface ILoader {
  className?: string;
}

export const Loader = memo(({ className }: ILoader) => (
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
));
Loader.displayName = 'Loader';

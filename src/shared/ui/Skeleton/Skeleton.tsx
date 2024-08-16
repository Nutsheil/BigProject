import { classNames } from 'shared/lib/classNames/classNames';
import type { CSSProperties } from 'react';
import { memo } from 'react';
import classes from './Skeleton.module.scss';

interface ISkeleton {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = memo((props: ISkeleton) => {
  const { className, height, width, borderRadius } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div className={classNames(classes.Skeleton, {}, [className])} style={styles} />;
});
Skeleton.displayName = 'Skeleton';

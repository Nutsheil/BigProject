import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Icon.module.scss';

type IconType = 'fill' | 'stroke';

interface IIcon {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  type?: IconType;
  className?: string;
}

export const Icon = memo((props: IIcon) => {
  const { Svg, type = 'fill', className } = props;

  return <Svg className={classNames(classes.Icon, {}, [classes[type], className])} />;
});
Icon.displayName = 'Icon';

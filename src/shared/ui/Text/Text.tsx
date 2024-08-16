import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 's' | 'm' | 'l';

interface IText {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: IText) => {
  const { className, title, text, theme = 'primary', align = 'left', size = 'm' } = props;

  return (
    <div className={classNames(classes.Text, {}, [className, classes[theme], classes[align], classes[size]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
Text.displayName = 'Text';

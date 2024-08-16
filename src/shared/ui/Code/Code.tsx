import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import classes from './Code.module.scss';

interface ICode {
  text: string;
  className?: string;
}

export const Code = memo((props: ICode) => {
  const { text, className } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(classes.Code, {}, className)}>
      <Button className={classes.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <Icon Svg={CopyIcon} type='stroke' />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
Code.displayName = 'Code';

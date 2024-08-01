import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { useEffect, useRef, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface IInput extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: IInput) => {
  const { className, value, onChange, type = 'text', autoFocus, ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <input
      className={classNames(classes.Input, {}, className)}
      value={value}
      ref={inputRef}
      onChange={handleChange}
      type={type}
      {...otherProps}
    />
  );
});

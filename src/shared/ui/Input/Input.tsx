import type { ChangeEvent } from 'react';
import { useEffect, useRef, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Input.module.scss';

type InputType = 'text' | 'number';

interface IInput {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
  type?: InputType;
  placeholder?: string;
}

export const Input = memo((props: IInput) => {
  const { className, value, onChange, type = 'text', autoFocus, readonly, placeholder } = props;

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
      className={classNames(classes.Input, { [classes.readonly]: readonly }, className)}
      value={value}
      ref={inputRef}
      onChange={handleChange}
      type={type}
      readOnly={readonly}
      placeholder={placeholder}
    />
  );
});
Input.displayName = 'Input';

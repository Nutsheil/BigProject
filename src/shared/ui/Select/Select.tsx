import type { ChangeEvent } from 'react';
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface ISelectOption {
  value: string;
  content: string;
}

interface ISelect {
  className?: string;
  label?: string;
  options?: ISelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: ISelect) => {
  const { className, label, options, onChange, value, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(
    () =>
      options?.map(opt => (
        <option className={classes.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={classNames(classes.Wrapper, {}, [className])}>
      {label && <span className={classes.label}>{label}: </span>}
      <select disabled={readonly} className={classes.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
Select.displayName = 'Select';

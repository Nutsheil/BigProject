import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { enumToSelectOptions } from 'shared/lib/enumToSelectOptions';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';

interface ICurrencySelect {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  label?: string;
}

const options = enumToSelectOptions(Currency);

export const CurrencySelect = memo((props: ICurrencySelect) => {
  const { className, value, onChange, readonly, label } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      label={label}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
CurrencySelect.displayName = 'CurrencySelect';

import { memo, useCallback } from 'react';
import { enumToSelectOptions } from 'shared/lib/enumToSelectOptions';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface ICountrySelect {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
  label?: string;
}

const options = enumToSelectOptions(Country);

export const CountrySelect = memo((props: ICountrySelect) => {
  const { className, value, onChange, readonly, label } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
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
CountrySelect.displayName = 'CountrySelect';

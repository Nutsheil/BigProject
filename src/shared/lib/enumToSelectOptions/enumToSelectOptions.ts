import type { ISelectOption } from 'shared/ui/Select';

export const enumToSelectOptions = (enumObj: { [key: string]: string }): ISelectOption[] =>
  Object.entries(enumObj).map(([enumKey, enumValue]) => ({
    value: enumKey,
    content: enumValue,
  }));

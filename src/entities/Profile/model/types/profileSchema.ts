import type { Country } from 'entities/Country';
import type { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  MISSING_FIRST_NAME = 'MISSING_FIRST_NAME',
  MISSING_LAST_NAME = 'MISSING_LAST_NAME',
  MISSING_AGE = 'MISSING_AGE',
  MISSING_CITY = 'MISSING_CITY',
  MISSING_USERNAME = 'MISSING_USERNAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
}

export interface IProfile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import type { IProfile } from '../../types/profileSchema';
import { ValidateProfileError } from '../../types/profileSchema';
import { validateProfileData } from './validateProfileData';

const profileData: IProfile = {
  firstName: 'Евгений',
  lastName: 'Редченко',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB,
  username: 'Nutshell',
};

describe('validateProfileData', () => {
  test('all field is correct', () => {
    const result = validateProfileData(profileData);
    expect(result).toEqual([]);
  });

  test('missing first name', () => {
    const result = validateProfileData({ ...profileData, firstName: undefined });
    expect(result).toEqual([ValidateProfileError.MISSING_FIRST_NAME]);
  });

  test('missing last name', () => {
    const result = validateProfileData({ ...profileData, lastName: undefined });
    expect(result).toEqual([ValidateProfileError.MISSING_LAST_NAME]);
  });

  test('missing age', () => {
    const result = validateProfileData({ ...profileData, age: undefined });
    expect(result).toEqual([ValidateProfileError.MISSING_AGE]);
  });

  test('missing city', () => {
    const result = validateProfileData({ ...profileData, city: undefined });
    expect(result).toEqual([ValidateProfileError.MISSING_CITY]);
  });

  test('missing username', () => {
    const result = validateProfileData({ ...profileData, username: undefined });
    expect(result).toEqual([ValidateProfileError.MISSING_USERNAME]);
  });

  test('no data', () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('incorrect age', () => {
    expect(validateProfileData({ ...profileData, age: Number.NaN })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    expect(validateProfileData({ ...profileData, age: 0 })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    expect(validateProfileData({ ...profileData, age: 101 })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    expect(validateProfileData({ ...profileData, age: -10 })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    expect(validateProfileData({ ...profileData, age: 20.5 })).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
});

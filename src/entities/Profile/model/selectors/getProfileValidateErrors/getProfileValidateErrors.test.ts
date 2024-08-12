import type { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profileSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('Should return profile validation errors', () => {
    const errors: ValidateProfileError[] = [ValidateProfileError.MISSING_AGE, ValidateProfileError.MISSING_CITY];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});

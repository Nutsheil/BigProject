import { ValidateProfileError } from '../../types/profileSchema';
import type { IProfile } from '../../types/profileSchema';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { firstName, lastName, age, city, username } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstName) {
    errors.push(ValidateProfileError.MISSING_FIRST_NAME);
  }

  if (!lastName) {
    errors.push(ValidateProfileError.MISSING_LAST_NAME);
  }

  if (!age) {
    errors.push(ValidateProfileError.MISSING_AGE);
  } else if (age < 0 || age > 100) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileError.MISSING_CITY);
  }

  if (!username) {
    errors.push(ValidateProfileError.MISSING_USERNAME);
  }

  return errors;
};

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import type { IProfile, ProfileSchema } from '../types/profileSchema';
import { ValidateProfileError } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';

const profileData: IProfile = {
  firstName: 'Евгений',
  lastName: 'Редченко',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB,
  username: 'Nutshell',
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false });
  });

  test('test cancel edit', async () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: { ...profileData, firstName: 'new name', age: undefined },
      readonly: false,
      validateErrors: [ValidateProfileError.MISSING_AGE],
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit)).toEqual({
      data: profileData,
      form: profileData,
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '123456',
        }),
      ),
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileData, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: profileData,
      data: profileData,
    });
  });
});

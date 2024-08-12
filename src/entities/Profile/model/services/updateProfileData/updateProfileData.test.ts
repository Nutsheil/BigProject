import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/config/tests';
import type { IProfile } from '../../types/profileSchema';
import { ValidateProfileError } from '../../types/profileSchema';
import { updateProfileData } from './updateProfileData';

const profileData: IProfile = {
  firstName: 'Евгений',
  lastName: 'Редченко',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB,
  username: 'Nutshell',
};

describe('updateProfileData', () => {
  test('success update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.call();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('error update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.call();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profileData, firstName: undefined },
      },
    });

    const result = await thunk.call();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.MISSING_FIRST_NAME]);
  });
});

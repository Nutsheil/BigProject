import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/config/tests';
import type { IProfile } from '../../types/profileSchema';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
  test('success fetch profile data', async () => {
    const profileData: IProfile = {
      firstName: 'Евгений',
      lastName: 'Редченко',
      age: 22,
      country: Country.Russia,
      city: 'Saint-Petersburg',
      currency: Currency.RUB,
      username: 'Nutshell',
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.call();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('error fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.call();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});

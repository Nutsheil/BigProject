import type { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import type { IProfile } from '../../types/profileSchema';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('Should return profile data', () => {
    const profileData: IProfile = {
      firstName: 'Евгений',
      lastName: 'Редченко',
      age: 22,
      country: Country.Russia,
      city: 'Saint-Petersburg',
      currency: Currency.RUB,
      username: 'Nutshell',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});

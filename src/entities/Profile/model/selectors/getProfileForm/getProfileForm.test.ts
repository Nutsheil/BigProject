import type { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import type { IProfile } from '../../types/profileSchema';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('Should return profile form', () => {
    const profileForm: IProfile = {
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
        form: profileForm,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(profileForm);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});

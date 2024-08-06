import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import classes from './ProfilePage.module.scss';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classes.ProfilePage}>
        <h1 style={{ textAlign: 'center' }}>{t('Профиль')}</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(classes.ProfileCard, {}, className)}>
      <div className={classes.header}>
        <Text title={t('Профиль')} />
        <Button className={classes.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={classes.content}>
        <Input value={data?.firstName} placeholder={t('Ваше имя')} className={classes.input} />
        <Input value={data?.lastName} placeholder={t('Ваша фамилия')} className={classes.input} />
      </div>
    </div>
  );
};

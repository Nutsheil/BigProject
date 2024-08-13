import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classes from './LangSwitcher.module.scss';

interface ILangSwitcher {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcher) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button className={classNames(classes.LangSwitcher, {}, className)} theme={ButtonTheme.CLEAR} onClick={toggle}>
        {t(short ? 'Короткий язык' : 'Язык')}
      </Button>
    </div>
  );
});
LangSwitcher.displayName = 'LangSwitcher';

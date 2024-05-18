import { Theme, useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button'
import classes from './ThemeSwitcher.module.scss';

interface IThemeSwitcher {
	className?: string
}

export const ThemeSwitcher = ({className}: IThemeSwitcher) => {
	const {theme, toggleTheme} = useTheme();
	
	return (
		<Button 
			className={classNames(classes.ThemeSwitcher, {}, className)}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
		</Button>
	)
}

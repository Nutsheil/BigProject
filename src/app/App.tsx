import { classNames } from 'shared/lib/classNames'
import { useTheme } from './provider/ThemeProvider'
import { AppRouter } from './provider/router'
import { NavBar } from 'widgets/NavBar'
import './styles/index.scss'

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, theme)}>
			<NavBar />
			<AppRouter />
		</div>
	)
}

export {App}

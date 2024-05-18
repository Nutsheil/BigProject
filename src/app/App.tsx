import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from './provider/ThemeProvider'
import { AppRouter } from './provider/router'
import { NavBar } from 'widgets/NavBar'
import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, theme)}>
			<NavBar />
			<AppRouter />
			<button onClick={toggleTheme}>Toggle theme</button>
		</div>
	)
}

export {App}

import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from './provider/ThemeProvider'
import { AppRouter } from './provider/router'
import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, theme)}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to={'/'} style={{marginRight: '20px'}}>Home</Link>
			<Link to={'/About'}>About</Link>
			<AppRouter />
		</div>
	)
}

export {App}

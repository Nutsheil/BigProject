import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { useTheme } from './provider/ThemeProvider'
import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, theme)}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to={'/'} style={{marginRight: '20px'}}>Home</Link>
			<Link to={'/About'}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />}/>
					<Route path='/About'element={<AboutPage />}/>
				</Routes>
			</Suspense>
		</div>
	)
}

export {App}

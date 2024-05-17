import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { useTheme } from './theme/useTheme'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to={'/'} style={{marginRight: '20px'}}>Home</Link>
			<Link to={'/About'}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync/>}/>
					<Route path='/About'element={<AboutPageAsync/>}/>
				</Routes>
			</Suspense>
		</div>
	)
}

export {App}

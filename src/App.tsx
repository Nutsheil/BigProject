import { Route, Routes, Link } from 'react-router-dom'
import './index.scss'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import { Suspense } from 'react'

const App = () => {
	return (
		<div className="app">
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

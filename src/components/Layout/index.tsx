import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
	return (
		<div className="min-h-screen px-3 py-2">
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout

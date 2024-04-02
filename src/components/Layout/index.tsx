import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
	return (
		<div className="mx-3 my-2 min-h-screen">
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout

import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col items-center overflow-x-hidden px-8 py-2">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout

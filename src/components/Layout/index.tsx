import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer/Footer'
import { Suspense } from 'react'

const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col items-center px-8 py-2">
			<Header />
			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
			<Footer />
		</div>
	)
}

export default Layout

import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Suspense } from 'react'
import { Icons } from '../Icons'

const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col items-center px-0 py-2">
			<Header />
			<Suspense
				fallback={<Icons.Loader size={100} className="my-64 duration-1000" />}
			>
				<Outlet />
			</Suspense>
			<Footer />
		</div>
	)
}

export default Layout

import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Suspense } from 'react'
import { Icons } from '../Icons'
import ScrollWrapper from './ScrollWrapper'

const Layout = () => {
	return (
		<ScrollWrapper>
			<div className="relative flex min-h-screen flex-col items-center px-0">
				<Header />
				<Suspense
					fallback={<Icons.Loader size={100} className="my-64 duration-1000" />}
				>
					<Outlet />
				</Suspense>
				<Footer />
			</div>
		</ScrollWrapper>
	)
}

export default Layout

import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Layout = () => {
	return (
		<>
			<Button>Header</Button>
			<Outlet />
		</>
	)
}

export default Layout

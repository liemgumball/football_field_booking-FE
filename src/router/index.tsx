import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

// Routes
import Layout from '@/components/Layout'
import Home from '@/pages/Home'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
		</Route>,
	),
)

export default router

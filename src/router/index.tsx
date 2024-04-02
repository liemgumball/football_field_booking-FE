import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

// Routes
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import PrivateRoute from '@/components/PrivateRoute'
import SignUp from '@/pages/SignUp'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />

			{/*-------------------------- Private Routes --------------------------*/}
			<Route element={<PrivateRoute />} />
		</Route>,
	),
)

export default router

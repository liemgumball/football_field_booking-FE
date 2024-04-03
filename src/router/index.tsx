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
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="*" element={<NotFound />} />

			{/*-------------------------- Private Routes --------------------------*/}
			<Route element={<PrivateRoute />}></Route>
		</Route>,
	),
)

export default router

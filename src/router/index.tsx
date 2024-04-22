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
import AboutUs from '@/pages/AboutUs'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/aboutus" element={<AboutUs />} />

			{/*-------------------------- Private Routes --------------------------*/}
			<Route element={<PrivateRoute />}></Route>
		</Route>,
	),
)

export default router

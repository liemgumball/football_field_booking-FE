import { lazy } from 'react'
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

// Eagle Loading Routes
import Layout from '@/components/Layout'
import PrivateRoute from '@/components/PrivateRoute'

// Lazy Loading Routes
const Home = lazy(async () => import('@/pages/Home'))
const SignUp = lazy(async () => import('@/pages/SignUp'))
const Login = lazy(async () => import('@/pages/Login'))
const NotFound = lazy(async () => import('@/pages/NotFound'))
const AvailableBooking = lazy(async () => import('@/pages/AvailableBooking'))
const Booking = lazy(async () => import('@/pages/Booking'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="*" element={<NotFound />} />
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/available-booking" element={<AvailableBooking />} />
			<Route path="/booking/:id" element={<Booking />} />

			{/*-------------------------- Private Routes --------------------------*/}
			<Route element={<PrivateRoute />}></Route>
		</Route>,
	),
)

export default router

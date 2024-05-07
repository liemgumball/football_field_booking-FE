import { lazy } from 'react'
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

// Eagle Loading Routes
import Layout from '@/components/Layout'
import PrivateRoute from '@/components/PrivateRoute'
import RouteErrorBoundary from '@/components/RouteErrorBoundary'
import AboutUs from '@/pages/AboutUs'

// Lazy Loading Routes
const Home = lazy(async () => import('@/pages/Home'))
const SignUp = lazy(async () => import('@/pages/SignUp'))
const Login = lazy(async () => import('@/pages/Login'))
const NotFound = lazy(async () => import('@/pages/NotFound'))
const AvailableBookings = lazy(async () => import('@/pages/AvailableBookings'))
const AvailableBookingDetails = lazy(
	async () => import('@/pages/AvailableBookingDetails'),
)
const HistoryBookings = lazy(async () => import('@/pages/HistoryBookings'))
const BookingDetails = lazy(async () => import('@/pages/BookingDetails'))
const VerifyAccount = lazy(async () => import('@/pages/VerifyAccount'))
const Fields = lazy(async () => import('@/pages/Fields'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="*" element={<NotFound />} />

			{/* Landing */}
			<Route index element={<Home />} />
			<Route path="/aboutus" element={<AboutUs />} />

			{/* Authentication */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/verify-account/:token" element={<VerifyAccount />} />

			{/* Booking */}
			<Route path="/available-booking">
				<Route index element={<AvailableBookings />} />
				<Route path=":id" element={<AvailableBookingDetails />} />
			</Route>

			{/* Field */}
			<Route path="/fields" element={<Fields />} />

			{/*-------------------------- Private Routes --------------------------*/}
			<Route element={<PrivateRoute />} errorElement={<RouteErrorBoundary />}>
				<Route path="/bookings">
					<Route index element={<HistoryBookings />} />
					<Route path=":id" element={<BookingDetails />} />
				</Route>
			</Route>
		</Route>,
	),
)

export default router

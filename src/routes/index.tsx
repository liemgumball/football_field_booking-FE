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
import { PATHS } from '@/constants/navigation'

// Lazy Loading Routes
const Home = lazy(() => import('@/pages/Home'))
const SignUp = lazy(() => import('@/pages/SignUp'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const AvailableBookings = lazy(() => import('@/pages/AvailableBookings'))
const AvailableBookingDetails = lazy(
	() => import('@/pages/AvailableBookingDetails'),
)
const HistoryBookings = lazy(() => import('@/pages/HistoryBookings'))
const BookingDetails = lazy(() => import('@/pages/BookingDetails'))
const VerifyAccount = lazy(() => import('@/pages/VerifyAccount'))
const Fields = lazy(() => import('@/pages/Fields'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="*" element={<NotFound />} />

			{/* Landing */}
			<Route index element={<Home />} />
			<Route path={PATHS.ABOUT_US} element={<AboutUs />} />

			{/* Authentication */}
			<Route path={PATHS.LOGIN} element={<Login />} />
			<Route path={PATHS.SIGNUP} element={<SignUp />} />
			<Route path={PATHS.VERIFY_ACCOUNT} element={<VerifyAccount />} />

			{/* Booking */}
			<Route path={PATHS.AVAILABLE_BOOKING.BASE}>
				<Route index element={<AvailableBookings />} />
				<Route
					path={PATHS.AVAILABLE_BOOKING.DETAILS}
					element={<AvailableBookingDetails />}
				/>
			</Route>

			{/* Field */}
			<Route path={PATHS.FIELD.BASE}>
				<Route index element={<Fields />} />
			</Route>

			{/* ------------------------- Private Routes ------------------------- */}
			<Route element={<PrivateRoute />} errorElement={<RouteErrorBoundary />}>
				<Route path={PATHS.BOOKING.BASE}>
					<Route index element={<HistoryBookings />} />
					<Route path={PATHS.BOOKING.DETAILS} element={<BookingDetails />} />
				</Route>
			</Route>
		</Route>,
	),
)

export default router
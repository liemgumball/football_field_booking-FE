export const PATHS = {
	HOME: '/',
	ABOUT_US: '/about-us',
	LOGIN: '/login',
	SIGNUP: '/signup',
	VERIFY_ACCOUNT: '/verify-account/:token',
	AVAILABLE_BOOKING: {
		BASE: '/available-bookings',
		DETAILS: ':id',
	},
	BOOKING: {
		BASE: '/bookings',
		DETAILS: ':id',
	},
	FIELD: {
		BASE: '/fields',
		DETAILS: ':id',
		BOOKING: 'available-bookings',
	},
	REGISTER_FIELD: '/register-field',
	SUPPORT: '/support',
} as const

export const FOOTER_NAV_LIST_LEFT = [
	{
		to: '#',
		content: 'Equipment Rental',
	},
	{
		to: '#',
		content: 'Referee Booking',
	},
	{
		to: '#',
		content: 'Training Sessions',
	},
]

export const FOOTER_NAV_LIST_RIGHT = [
	{
		to: '#',
		content: 'Water and Snacks',
	},
	{
		to: '#',
		content: 'Locker Room',
	},
	{
		to: '#',
		content: 'On-Site Physiotherapy',
	},
	{
		to: '#',
		content: 'Premium Bookings',
	},
]

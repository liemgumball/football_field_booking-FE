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
		BOOKING: 'available',
	},
	REGISTER_FIELD: '/register-field',
	SUPPORT: '/support',
} as const

export const FOOTER_NAV_LIST_LEFT = [
	{
		to: '#',
		content: 'Caravan Soler Tent',
	},
	{
		to: '#',
		content: 'Family Tent Camping',
	},
	{
		to: '#',
		content: 'Classic Tent Camping',
	},
	{
		to: '#',
		content: 'Wild Tent Camping',
	},
	{
		to: '#',
		content: 'Small Cabin Wood',
	},
]

export const FOOTER_NAV_LIST_RIGHT = [
	{
		to: '#',
		content: 'Need a Career ?',
	},
	{
		to: '#',
		content: 'Latest News & Blog',
	},
	{
		to: '#',
		content: 'Core Features',
	},
	{
		to: '#',
		content: 'Meet Our teams',
	},
]

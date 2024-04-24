export const ENV_VARS = {
	API_URL: {
		BASE: import.meta.env.VITE_API_URL ?? '',
		AUTH: {
			LOGIN: '/auth/login',
			SIGNUP: '/auth/signup',
		},
		USER: {
			BASE: 'users',
			UPDATE: '/users/update',
		},
		FOOTBALL_FIELD: {
			BASE: '/fields',
		},
		DAY_OF_SERVICE: {
			BASE: '/day-of-services',
		},
		BOOKING: {
			BASE: '/bookings',
		},
	},
	GOOGLE: {
		CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '',
	},
} as const

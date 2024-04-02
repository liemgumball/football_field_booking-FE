export const ENV_VARS = {
	API_URL: {
		BASE: import.meta.env.VITE_API_URL ?? '',
		AUTH: {
			LOGIN: '/auth/login',
			SIGNUP: '/auth/signup',
		},
	},
	GOOGLE: {
		CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '',
	},
} as const

export const ENV_VARS = {
	API_URL: import.meta.env.VITE_API_URL ?? '',
	GOOGLE: {
		CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '',
	},
	MAP: {
		ACCESS_TOKEN: import.meta.env.VITE_MAP_ACCESS_TOKEN ?? '',
		LIGHT_STYLE_URL: import.meta.env.VITE_MAP_STYLE_URL ?? '',
		DARK_STYLE_URL: import.meta.env.VITE_MAP_DARK_URL ?? '',
	},
} as const

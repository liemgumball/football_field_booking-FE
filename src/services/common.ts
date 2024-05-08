import { ENV_VARS } from '@/constants/envVars'

type TReqInit<T = unknown> = {
	method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
	data?: T
	withCredentials?: boolean
}

const apiRequest = async <T>(url: string, init?: TReqInit<T>) => {
	if (!init) {
		const response = await fetch(ENV_VARS.API_URL + url)

		if (!response.ok) throw response

		try {
			const data = await response.json()

			return data
		} catch (err) {
			return response
		}
	}

	const { method, data, withCredentials } = init

	const response = await fetch(ENV_VARS.API_URL + url, {
		method: method || 'GET',
		headers: { 'Content-Type': 'application/json' },
		credentials: withCredentials ? 'include' : undefined,
		body: data ? JSON.stringify(data) : undefined,
	})

	if (!response.ok) throw response

	try {
		const data = await response.json()

		return data
	} catch (err) {
		return response
	}
}

export default apiRequest

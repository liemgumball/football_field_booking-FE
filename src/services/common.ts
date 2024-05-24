import { ENV_VARS } from '@/constants/envVars'

type TReqInit<T = unknown> = {
	method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
	data?: T
	withCredentials?: boolean
}

/**
 *
 * @param url endpoint path to BE service
 * @param init request init
 * @returns json if has json response, return response if no json
 * @throws response as error if `status code` is not `2xx`
 */
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

	// With some initRequest
	const { method, data, withCredentials } = init

	const response = await fetch(ENV_VARS.API_URL + url, {
		method: method || 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: withCredentials
				? `Bearer ${localStorage.getItem('access_token')}`
				: '',
		},
		credentials: withCredentials ? 'include' : undefined,
		body: data ? JSON.stringify(data) : undefined,
	})

	if (!response.ok) throw response

	try {
		const data = (await response.json()) as Record<string, unknown>

		// save token
		if (data['token']) {
			localStorage.setItem('access_token', data['token'] as string)
		}

		return data
	} catch (err) {
		return response
	}
}

export default apiRequest

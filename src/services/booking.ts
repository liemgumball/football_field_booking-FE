import { ENV_VARS } from '@/constants/envVars'
import { TBooking } from '@/types'

export const createBooking = async (
	data: Omit<TBooking, '_id'>,
): Promise<TBooking> => {
	const response = await fetch(
		ENV_VARS.API_URL.BASE + ENV_VARS.API_URL.BOOKING.BASE,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(data),
		},
	)

	if (!response.ok) {
		throw response
	}

	return response.json()
}

export async function getBookingDetails(id: string): Promise<TBooking> {
	const response = await fetch(
		ENV_VARS.API_URL.BASE + ENV_VARS.API_URL.BOOKING.BASE + `/${id}`,
		{
			credentials: 'include',
		},
	)

	if (!response.ok) {
		throw response
	}

	return response.json()
}

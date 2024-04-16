import { ENV_VARS } from '@/constants/envVars'
import { TDayOfService } from '@/types'
import { convertToTimeFormat } from '@/utils/booking'

export const getDayOfServices = async (
	cursor: number,
	date: string,
	from: string,
	to?: string,
	size?: string | null,
): Promise<TDayOfService[]> => {
	const response = await fetch(
		ENV_VARS.API_URL.BASE +
			ENV_VARS.API_URL.DAY_OF_SERVICE.BASE +
			`?date=${date}&from=${convertToTimeFormat(from)}${to ? '&to=' + convertToTimeFormat(to) : ''}${size ? '&size=' + size : ''}&cursor=${cursor}`,
	)
	if (!response.ok) {
		throw new Error('Failed to fetch day of services')
	}
	return await response.json()
}

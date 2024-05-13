import apiRequest from './common'

export const getDayOfServices = (
	cursor: number,
	date: string,
	from: string,
	to?: string,
	size?: number | null,
	coordinates?: {
		longitude: number
		latitude: number
	},
) =>
	apiRequest(
		`day-of-services?date=${date}&from=${from}${to ? '&to=' + to : ''}${size ? '&size=' + size : ''}${coordinates ? `&latitude=${coordinates.latitude.toString()}&longitude=${coordinates.longitude.toString()}` : ''}&cursor=${cursor}`,
	)

export const getDayOfServiceById = (id: string, from?: string, to?: string) =>
	apiRequest(
		`day-of-services/${id}?${from ? `from=${from}` : ''}${from && to ? `&to=${to}` : ''}`,
	)

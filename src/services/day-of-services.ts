import apiRequest from './common'

export const getDayOfServices = (
	cursor: number,
	date: string,
	from: string,
	options: {
		to?: string
		size?: number | null
		coordinates?: {
			longitude: number
			latitude: number
		}
		fieldId?: string
	},
) => {
	const { to, size, coordinates, fieldId } = options
	return apiRequest(
		`day-of-services?date=${date}&from=${from}${to ? '&to=' + to : ''}${size ? '&size=' + size : ''}${coordinates ? `&latitude=${coordinates.latitude.toString()}&longitude=${coordinates.longitude.toString()}` : ''}&cursor=${cursor}${fieldId ? '&fieldId=' + fieldId : ''}`,
	)
}

export const getDayOfServiceById = (id: string, from?: string, to?: string) =>
	apiRequest(
		`day-of-services/${id}?${from ? `from=${from}` : ''}${from && to ? `&to=${to}` : ''}`,
	)

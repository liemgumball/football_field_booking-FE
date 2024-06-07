import apiRequest from './common'

export const getDayOfServices = (
	cursor: number,
	date: string,
	from: string,
	options: {
		to?: string
		size?: number | null
		longitude?: number
		latitude?: number
		distance?: number
		fieldId?: string
	},
) => {
	const { to, size, longitude, latitude, distance, fieldId } = options

	return apiRequest(
		`day-of-services?date=${date}&from=${from}${to ? '&to=' + to : ''}${size ? '&size=' + size : ''}${latitude && longitude ? `&latitude=${latitude.toString()}&longitude=${longitude.toString()}` : ''}${distance ? '&distance=' + distance.toString() : ''}&cursor=${cursor}${fieldId ? '&fieldId=' + fieldId : ''}`,
	)
}

export const getDayOfServiceById = (id: string, from?: string, to?: string) =>
	apiRequest(
		`day-of-services/${id}?${from ? `from=${from}` : ''}${from && to ? `&to=${to}` : ''}`,
	)

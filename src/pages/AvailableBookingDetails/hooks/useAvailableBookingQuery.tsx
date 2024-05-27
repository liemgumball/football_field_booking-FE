import { getDayOfServiceById } from '@/services/day-of-services'
import useAvailableBookingStore from '@/stores/availableBooking'
import { TDayOfService } from '@/types'
import { getAvailableBookingInfo } from '@/utils/booking'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useAvailableBookingQuery = (
	id: string,
	from: string,
	to: string,
) => {
	const setAvailableBooking = useAvailableBookingStore((store) => store.set)

	const query = useQuery<TDayOfService>({
		queryKey: ['day-of-service', id],
		queryFn: () => getDayOfServiceById(id),
	})

	// Update store on fetch
	useEffect(() => {
		if (query.data) {
			const info = getAvailableBookingInfo(query.data, from, to)
			setAvailableBooking({ ...info, dayOfService: query.data, from, to })
		}
	}, [query.data, from, to, setAvailableBooking])

	return query
}

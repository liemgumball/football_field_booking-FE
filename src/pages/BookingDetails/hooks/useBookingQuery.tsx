import { getBookingDetails } from '@/services/booking'
import { TBooking } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useBookingQuery = (id: string) =>
	useQuery<TBooking>({
		queryKey: ['booking', id],
		queryFn: () => getBookingDetails(id),
	})

import { getBookingDetails } from '@/services/booking'
import { useQuery } from '@tanstack/react-query'

export const useBookingQuery = (id: string) =>
	useQuery({
		queryKey: ['bookings', id],
		queryFn: () => getBookingDetails(id),
	})

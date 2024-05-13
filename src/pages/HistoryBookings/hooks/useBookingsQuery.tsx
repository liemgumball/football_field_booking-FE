import { getBookings } from '@/services/booking'
import { useQuery } from '@tanstack/react-query'

export const useBookingsQuery = () =>
	useQuery({
		queryKey: ['bookings'],
		queryFn: getBookings,
	})

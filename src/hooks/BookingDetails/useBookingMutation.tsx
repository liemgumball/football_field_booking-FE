import { updateBooking } from '@/services/booking'
import { TBooking } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useBookingMutation = (id: string) => {
	const query = useQueryClient()

	return useMutation({
		mutationFn: (data: Partial<TBooking>) => updateBooking(id, data),
		onSettled: () => query.invalidateQueries({ queryKey: ['booking', id] }),
	})
}

export default useBookingMutation

import { createBooking } from '@/services/booking'
import useAuthStore from '@/stores/auth'
import { TBooking } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAvailableBookingMutation = (
	id: string,
	subfieldId: string,
	date: Date | string,
	price: number,
) => {
	const user = useAuthStore((set) => set.user)
	const queryClient = useQueryClient()

	const mutation = useMutation<
		TBooking,
		Error,
		Pick<
			TBooking,
			'from' | 'to' | 'name' | 'description' | 'additionalServices'
		>,
		unknown
	>({
		mutationFn: (values) =>
			createBooking({
				...values,
				from: values.from,
				to: values.to,
				userId: user?._id || '',
				subfieldId: subfieldId,
				date: date,
				price: price,
			}),
		onSettled: () =>
			queryClient.invalidateQueries({
				queryKey: ['day-of-service', id],
			}),
	})

	return mutation
}

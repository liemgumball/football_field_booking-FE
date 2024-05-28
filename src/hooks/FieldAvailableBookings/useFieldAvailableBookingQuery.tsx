import { getDayOfServices } from '@/services/day-of-services'
import { TDayOfService, TFootballField, TTimeStep } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'

const useFieldAvailableBookingQuery = (
	date: string,
	from: TTimeStep,
	to: TTimeStep,
) => {
	const field = useOutletContext<TFootballField>()

	return useInfiniteQuery<TDayOfService[]>({
		queryKey: ['day-of-services', field._id, date, from, to],
		queryFn: ({ pageParam }) =>
			getDayOfServices(pageParam as number, date, from, {
				to,
				fieldId: field._id,
			}),
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.flat().length < 6) {
				return undefined
			}
			return pages.length
		},
	})
}

export default useFieldAvailableBookingQuery

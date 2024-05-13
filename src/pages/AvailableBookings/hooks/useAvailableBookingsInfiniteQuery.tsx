import { getDayOfServices } from '@/services/day-of-services'
import { TDayOfService, TTimeStep } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useAvailableBookingsInfiniteQuery = (
	date: string,
	from: TTimeStep,
	to: TTimeStep,
	size: number | null,
	coordinatesQuery?: {
		longitude: number
		latitude: number
	},
) =>
	useInfiniteQuery<TDayOfService[]>({
		queryKey: ['day-of-services', date, from, to, size, coordinatesQuery],
		queryFn: ({ pageParam }) =>
			getDayOfServices(
				pageParam as number,
				date,
				from,
				to,
				size,
				coordinatesQuery,
			),
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.flat().length < 6) {
				return undefined
			}
			return pages.length
		},
	})

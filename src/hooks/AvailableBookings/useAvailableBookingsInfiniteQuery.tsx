import { getDayOfServices } from '@/services/day-of-services'
import { TDayOfService, TTimeStep, TViewPort } from '@/types'
import { calculateDistance } from '@/utils/map'
import { useInfiniteQuery } from '@tanstack/react-query'

const useAvailableBookingsInfiniteQuery = (
	date: string,
	from: TTimeStep,
	to: TTimeStep,
	size: number | null,
	searchString: string | null,
	viewPort?: TViewPort,
	radius?: number,
) => {
	const longitude = viewPort?.longitude
	const latitude = viewPort?.latitude
	const distance =
		viewPort && radius
			? calculateDistance(viewPort.latitude, viewPort.zoom, radius)
			: undefined

	return useInfiniteQuery<TDayOfService[]>({
		queryKey: [
			'day-of-services',
			date,
			from,
			to,
			size,
			longitude,
			latitude,
			distance,
			searchString,
		],
		queryFn: ({ pageParam }) =>
			getDayOfServices(pageParam as number, date, from, {
				to,
				size,
				longitude,
				latitude,
				distance,
				searchString: searchString || undefined,
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

export default useAvailableBookingsInfiniteQuery

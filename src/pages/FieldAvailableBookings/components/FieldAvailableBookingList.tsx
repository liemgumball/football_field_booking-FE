import { useSearchParams } from 'react-router-dom'
import useFieldAvailableBookingQuery from '@/hooks/FieldAvailableBookings/useFieldAvailableBookingQuery'
import SkeletonCard from '@/components/SkeletonCard'
import { getToday } from '@/utils/date'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import FetchErrorHandler from '@/components/FetchErrorHandler'
import AvailableBookingCard from '@/components/AvailableBookingCard'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/Icons'

const FieldAvailableBookingList = () => {
	const [searchParams] = useSearchParams()
	const date = searchParams.get('date') || getToday().toISOString()
	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo()

	const {
		isLoading,
		isError,
		error,
		data,
		fetchNextPage,
		isFetching,
		hasNextPage,
	} = useFieldAvailableBookingQuery(date, from, to)

	const bookings = data?.pages.flat()

	if (isLoading)
		return (
			<ul className="grid gap-x-4 gap-y-2 lg:grid-cols-2 xl:grid-cols-3">
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
			</ul>
		)

	return (
		<>
			<FetchErrorHandler errorMsg={error?.message} isError={isError}>
				<ul className="grid place-items-center gap-x-4 gap-y-4 lg:grid-cols-2 xl:grid-cols-3">
					{bookings?.map((booking) => (
						<AvailableBookingCard key={booking._id} {...booking} />
					))}
				</ul>
			</FetchErrorHandler>
			{hasNextPage && (
				<div className="container mt-8 text-center">
					<Button
						className="disabled:bg-muted-foreground"
						disabled={!hasNextPage || isFetching}
						onClick={() => fetchNextPage()}
					>
						{isFetching ? (
							<>
								<Icons.Loader className="mr-1" />
								Loading
							</>
						) : (
							'Load more'
						)}
					</Button>
				</div>
			)}
		</>
	)
}

export default FieldAvailableBookingList

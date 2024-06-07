import AvailabilityForm from '@/components/AvailabilityForm'
import AvailableBookingCard from '../../components/AvailableBookingCard'
import { Icons } from '@/components/Icons'
import SkeletonCard from '@/components/SkeletonCard'
import { Button } from '@/components/ui/button'
import useLocationStore from '@/stores/location'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { getToday } from '@/utils/date'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import HeroSection from './HeroSection'
import FetchErrorHandler from '@/components/FetchErrorHandler'
import useAvailableBookingsInfiniteQuery from '@/hooks/AvailableBookings/useAvailableBookingsInfiniteQuery'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import useDebounce from '@/hooks/useDebounce'
import { defaultCoordinates } from '@/constants/coordinates'
import { TViewPort } from '@/types'
import useMediaQuery from '@/hooks/useMediaQuery'

const AvailableBookings = () => {
	useDocumentTitle('Bookings')
	const userCoordinates = useLocationStore((set) => set.coordinates)

	// Get all search parameters
	const [searchParams] = useSearchParams()
	const date = searchParams.get('date') || getToday().toISOString()
	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo()
	const size = searchParams.get('size')
	const isLocationSearch =
		searchParams.get('location') === 'true' ? true : false

	const [viewPort, setViewPort] = useState<TViewPort>({
		...(userCoordinates || defaultCoordinates),
		zoom: 15,
	})
	const debouncedViewPort = useDebounce(viewPort, 500)

	const radius = useMediaQuery('(min-width: 768px)') ? 400 : 300

	const {
		data,
		isError,
		isLoading,
		error,
		isFetching,
		fetchNextPage,
		hasNextPage,
	} = useAvailableBookingsInfiniteQuery(
		date,
		from,
		to,
		size ? Number(size) : null,
		isLocationSearch ? debouncedViewPort : undefined,
		radius,
	)

	const bookingsAvailable = useMemo(() => data?.pages.flat(), [data])

	return (
		<main>
			<HeroSection />

			{/* Available Booking List */}
			<AvailabilityForm
				isFetching={isFetching}
				className="container my-10 grid grid-cols-1 rounded-xl bg-popover px-4 pb-6 pt-10 md:grid-cols-2 lg:grid-cols-5"
				setViewPort={setViewPort}
				defaultViewPort={viewPort}
				radius={radius}
			/>
			<section className="container px-12">
				<FetchErrorHandler isError={isError} errorMsg={error?.message}>
					<ul className="grid grid-cols-1 items-stretch justify-items-center gap-x-4 gap-y-6 transition duration-1000 lg:grid-cols-2 xl:grid-cols-3">
						{isLoading ? ( // Skeleton loading
							Array.from({ length: 6 }, (_, i) => i).map((i) => (
								<li key={i}>
									<SkeletonCard />
								</li>
							))
						) : !bookingsAvailable?.length ? ( // Empty data
							<p className="text-muted-foreground">
								No booking available found{' '}
								{isLocationSearch ? 'around your location' : ''}
							</p>
						) : (
							bookingsAvailable.map(
								({ field, subfield, date, turnOfServices, _id }) => (
									<li key={_id}>
										<AvailableBookingCard
											_id={_id}
											date={date}
											field={field}
											subfield={subfield}
											turnOfServices={turnOfServices}
										/>
									</li>
								),
							)
						)}
					</ul>
				</FetchErrorHandler>
			</section>

			{/* Load more button */}
			{hasNextPage && (
				<div className="container mt-8 text-center">
					<Button
						className="disabled:bg-muted-foreground"
						disabled={!hasNextPage || isFetching}
						onClick={() => fetchNextPage()}
					>
						{isFetching ? (
							<>
								<Icons.Loader className="mr-1 text-secondary" />
								Loading
							</>
						) : (
							'Load more'
						)}
					</Button>
				</div>
			)}
		</main>
	)
}

export default AvailableBookings

import BackGroundImg from '/available_booking_bg.png'
import AvailabilityForm from '@/components/AvailabilityForm'
import BookingAvailableCard from '@/components/BookingAvailableCard'
import QueryList from '@/components/QueryList'
import SkeletonCard from '@/components/SkeletonCard'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { getDayOfServices } from '@/services/day-of-services'
import useLocationStore from '@/stores/location'
import { TDayOfService } from '@/types'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { getToday } from '@/utils/date'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const AvailableBooking = () => {
	const coordinates = useLocationStore((set) => set.coordinates)

	const [searchParams] = useSearchParams()
	const date = searchParams.get('date') || getToday().toISOString()
	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo()
	const size = searchParams.get('size')
	const isLocationSearch =
		searchParams.get('location') !== 'true' ? false : coordinates ? true : false

	const coordinatesQuery = isLocationSearch
		? {
				longitude: coordinates!.longitude,
				latitude: coordinates!.latitude,
			}
		: undefined

	const {
		data,
		isError,
		isLoading,
		error,
		isFetching,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery<TDayOfService[]>({
		queryKey: ['dayOfServices', date, from, to, size, coordinatesQuery],
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
			if (lastPage.length === 0) {
				return undefined
			}
			return pages.length
		},
	})

	const bookingsAvailable = useMemo(() => data?.pages.flat(), [data])

	return (
		<main>
			<section
				className="relative h-[600px] w-screen bg-cover bg-center pb-56 pt-40"
				style={{
					backgroundImage: `url("${BackGroundImg}")`,
				}}
			>
				<div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-40" />
				<div className="container relative z-10">
					<div className="flex flex-col items-start gap-8 lg:items-center">
						<h1 className="text-7xl font-extrabold text-white">
							Explore Available Booking
						</h1>
						<Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
							<BreadcrumbList className="text-lg">
								<BreadcrumbItem>
									<BreadcrumbLink href="/">Home</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Available Booking</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</div>
			</section>
			<div className="container mb-20 mt-8">
				<AvailabilityForm className="mx-auto grid grid-cols-1 justify-items-center rounded-2xl bg-popover px-4 pb-6 pt-10 md:grid-cols-2 xl:grid-cols-5" />
			</div>
			<section className="container px-12">
				<QueryList
					isError={isError}
					error={error}
					className="grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-12 transition-all duration-1000 lg:grid-cols-2 xl:grid-cols-3"
				>
					{!isLoading && bookingsAvailable
						? bookingsAvailable.map(
								({ field, subfield, date, turnOfServices, _id }) =>
									turnOfServices.map(({ at, price, status }) => (
										<li key={_id + ':' + at}>
											<BookingAvailableCard
												date={date}
												at={at}
												price={price}
												status={status}
												field={field}
												subfield={subfield}
											/>
										</li>
									)),
							)
						: Array.from({ length: 6 }, (_, i) => i).map((i) => (
								<li key={i}>
									<SkeletonCard />
								</li>
							))}
				</QueryList>
			</section>
			<div className="container mb-4 mt-8 max-w-min">
				{hasNextPage && (
					<Button
						className="disabled:bg-muted-foreground"
						disabled={!hasNextPage || isFetching}
						onClick={() => fetchNextPage()}
					>
						{isFetching ? 'Loading ...' : 'Load more'}
					</Button>
				)}
			</div>
		</main>
	)
}

export default AvailableBooking

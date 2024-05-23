import { useSearchParams } from 'react-router-dom'
import useFieldAvailableBookingQuery from '../hooks/useFieldAvailableBookingQuery'
import SkeletonCard from '@/components/SkeletonCard'
import { getToday } from '@/utils/date'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import FetchErrorHandler from '@/components/FetchErrorHandler'
import AvailableBookingCard from '@/components/AvailableBookingCard'

const FieldAvailableBookingList = () => {
	const [searchParams] = useSearchParams()
	const date = searchParams.get('date') || getToday().toISOString()
	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo()

	const {
		isLoading,
		isError,
		error,
		data: bookings,
	} = useFieldAvailableBookingQuery(date, from, to)

	if (isLoading)
		return (
			<ul className="grid gap-x-4 gap-y-2 lg:grid-cols-2 xl:grid-cols-3">
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
			</ul>
		)

	return (
		<FetchErrorHandler errorMsg={error?.message} isError={isError}>
			<ul className="grid gap-x-4 gap-y-2 lg:grid-cols-2 xl:grid-cols-3">
				{bookings?.map((booking) => (
					<AvailableBookingCard key={booking._id} {...booking} />
				))}
			</ul>
		</FetchErrorHandler>
	)
}

export default FieldAvailableBookingList

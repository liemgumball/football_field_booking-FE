import AvailableBookingForm from './components/AvailableBookingForm'
import AvailableBookingHeader from './components/AvailableBookingHeader'
import { getDayOfServiceById } from '@/services/day-of-services'
import { calculatePrice, getInitialFrom, getInitialTo } from '@/utils/booking'
import { getDuration } from '@/utils/time'
import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import AvailableBookingSkeleton from './components/AvailableBookingSkeleton'
import { TDayOfService } from '@/types'

const AvailableBookingDetails = () => {
	const { id } = useParams()
	const [searchParams] = useSearchParams()

	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo(from)

	if (!id) throw new Error('Failed to find available booking Id')

	const { data, isLoading, isError, error } = useQuery<TDayOfService>({
		queryKey: ['bookings', id, from, to],
		queryFn: () => getDayOfServiceById(id, from, to),
		staleTime: 10000,
	})

	const bookingStatus = data?.turnOfServices.every(
		(t) => t.status === 'available',
	)
		? 'available'
		: data?.turnOfServices.every((t) => t.status === 'progressing')
			? 'progressing'
			: 'used'

	if (isLoading) return <AvailableBookingSkeleton />

	if (isError)
		return (
			<>
				<p>An error occurred while getting booking information</p>
				<p className="text-destructive">{error.message}</p>
			</>
		)

	if (!data)
		return <p className="text-destructive">Fail to get booking information</p>

	return (
		<main className="container ">
			<AvailableBookingHeader
				status={bookingStatus}
				date={data.date}
				rating={data.field.rating || undefined}
				fieldName={data.field.name + ' - ' + data?.subfield.name}
				fieldLocation={data?.field.location}
				price={calculatePrice(data.turnOfServices)}
				duration={getDuration(from, to)}
				size={data?.subfield.size}
			/>
			<section className="mx-auto my-4 min-w-max max-w-[700px] rounded-xl bg-secondary/80 px-12 py-8 xl:px-16">
				<AvailableBookingForm
					status={bookingStatus}
					id={id}
					from={from}
					to={to}
					date={data?.date}
					subfieldId={data.subfield._id}
					price={calculatePrice(data.turnOfServices)}
				/>
			</section>
		</main>
	)
}

export default AvailableBookingDetails

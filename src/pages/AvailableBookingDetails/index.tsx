import AvailableBookingForm from './components/AvailableBookingForm'
import AvailableBookingHeader from './components/AvailableBookingHeader'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { useParams, useSearchParams } from 'react-router-dom'
import AvailableBookingSkeleton from './components/AvailableBookingSkeleton'
import { useAvailableBookingQuery } from './hooks/useAvailableBookingQuery'
import useAvailableBookingStore from '@/stores/availableBooking'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const AvailableBookingDetails = () => {
	useDocumentTitle('Booking')
	// Get id
	const { id } = useParams()
	if (!id) throw new Error('Failed to find available booking Id')

	// Get initial booking time
	const [searchParams] = useSearchParams()
	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo(from)

	const { isLoading, isError, error } = useAvailableBookingQuery(id, from, to)

	const availableBooking = useAvailableBookingStore(
		(store) => store.availableBooking,
	)

	if (isLoading) return <AvailableBookingSkeleton />

	if (isError)
		return (
			<>
				<p>An error occurred while getting booking information</p>
				<p className="text-destructive">{error.message}</p>
			</>
		)

	if (!availableBooking)
		return <p className="text-destructive">Fail to get booking information</p>

	return (
		<main className="container ">
			<AvailableBookingHeader availableBooking={availableBooking} />
			<section className="mx-auto my-4 min-w-max max-w-[700px] rounded-xl bg-secondary/80 px-12 py-8 xl:px-16">
				<AvailableBookingForm availableBooking={availableBooking} />
			</section>
		</main>
	)
}

export default AvailableBookingDetails

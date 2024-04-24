import { getBookingDetails } from '@/services/booking'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import BookingDetailsSkeleton from './components/BookingDetailsSkeleton'
import BookingDetailsHeader from '@/components/BookingDetailsHeader'

const BookingDetails = () => {
	const { id } = useParams()
	if (!id) throw new Error('Booking Id not specified')

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [id],
		queryFn: () => getBookingDetails(id),
	})

	const bookingStatus = data?.confirmed
		? 'confirmed'
		: data?.cancel
			? 'cancelled'
			: 'processing'

	if (isLoading) return <BookingDetailsSkeleton />

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
		<main className="container">
			<BookingDetailsHeader
				status={bookingStatus}
				date={data.date as string}
				rating={data.field?.rating || null}
				fieldName={data.field?.name + ' - ' + data.subfield?.name}
				fieldLocation={data.field?.location}
				price={data.price}
				duration={1}
				size={data.subfield?.size}
			/>
		</main>
	)
}

export default BookingDetails

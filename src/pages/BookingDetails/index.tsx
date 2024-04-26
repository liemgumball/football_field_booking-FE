import { getBookingDetails } from '@/services/booking'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import BookingDetailsSkeleton from './components/BookingDetailsSkeleton'
import BookingDetailsHeader from './components/BookingDetailsHeader'
import { Separator } from '@/components/ui/separator'

const BookingDetails = () => {
	const { id } = useParams()
	if (!id) throw new Error('Booking Id not specified')

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [id],
		queryFn: () => getBookingDetails(id),
	})

	if (isLoading) return <BookingDetailsSkeleton />

	if (isError)
		return (
			<>
				<p>An error occurred while getting booking information</p>
				<p className="text-destructive">{error.message}</p>
			</>
		)

	if (!data || !data.field || !data.subfield)
		return <p className="text-destructive">Fail to get booking information</p>

	return (
		<main className="container">
			<BookingDetailsHeader field={data.field} status={data.status} />
			<Separator />
		</main>
	)
}

export default BookingDetails

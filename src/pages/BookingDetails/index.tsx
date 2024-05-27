import { useParams } from 'react-router'
import BookingDetailsSkeleton from './components/BookingDetailsSkeleton'
import BookingDetailsHeader from './components/BookingDetailsHeader'
import { Separator } from '@/components/ui/separator'
import BookingDetailsContent from './components/BookingDetailsContent'
import { useBookingQuery } from './hooks/useBookingQuery'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import ReviewForm from '@/pages/BookingDetails/components/ReviewForm'

const BookingDetails = () => {
	useDocumentTitle('Booking')

	const { id } = useParams()
	if (!id) throw new Error('Booking Id not specified')

	const { isLoading, data, isError, error } = useBookingQuery(id)

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
			<BookingDetailsHeader _id={id} field={data.field} status={data.status} />
			<Separator />
			<BookingDetailsContent {...data} />
			{data.status === 'confirmed' && (
				<ReviewForm id={data._id} review={data.review} />
			)}
		</main>
	)
}

export default BookingDetails

import { useParams } from 'react-router'

const BookingDetails = () => {
	const { id } = useParams()

	if (!id) throw new Error('Booking Id not specified')

	return <main>BookingDetails {id}</main>
}

export default BookingDetails

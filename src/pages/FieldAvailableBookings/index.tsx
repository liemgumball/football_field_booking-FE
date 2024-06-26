import FieldAvailabilityForm from './components/FieldAvailabilityForm'
import FieldAvailableBookingList from './components/FieldAvailableBookingList'

const FieldAvailableBookings = () => (
	<div className="space-y-4">
		<FieldAvailabilityForm />
		<FieldAvailableBookingList />
	</div>
)

export default FieldAvailableBookings

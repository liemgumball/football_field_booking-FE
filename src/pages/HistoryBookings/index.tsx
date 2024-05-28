import DataTable from './components/DataTable'
import Columns from './components/Columns'
import { useBookingsQuery } from '@/hooks/Bookings/useBookingsQuery'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import { Icons } from '@/components/Icons'

const HistoryBookings = () => {
	useDocumentTitle('History Bookings')

	const { data, isLoading } = useBookingsQuery()

	if (isLoading)
		return (
			<div className="container my-auto max-w-min">
				<Icons.Loader size={60} />
			</div>
		)

	return (
		<main className="container mb-4">
			{data && <DataTable data={data} columns={Columns} />}
		</main>
	)
}

export default HistoryBookings

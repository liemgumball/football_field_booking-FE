import DataTable from './components/DataTable'
import Columns from './components/Columns'
import { Loader2Icon } from 'lucide-react'
import { useBookingsQuery } from './hooks/useBookingsQuery'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const HistoryBookings = () => {
	useDocumentTitle('History Bookings')

	const { data, isLoading } = useBookingsQuery()

	if (isLoading)
		return (
			<div className="container my-auto mt-[90px] max-w-min">
				<Loader2Icon className="animate-spin" size={60} opacity={0.7} />
			</div>
		)

	return (
		<main className="container mb-4 mt-[90px]">
			{data && <DataTable data={data} columns={Columns} />}
		</main>
	)
}

export default HistoryBookings

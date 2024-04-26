import DataTable from './components/DataTable'
import Columns from './components/Columns'
import { useQuery } from '@tanstack/react-query'
import { getBookings } from '@/services/booking'
import { Loader2Icon } from 'lucide-react'

const HistoryBookings = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['bookings'],
		queryFn: getBookings,
		staleTime: 3000,
	})

	if (isLoading)
		return (
			<div className="container my-auto max-w-min">
				<Loader2Icon className="animate-spin" size={60} opacity={0.7} />
			</div>
		)

	return (
		<main className="container">
			{data && <DataTable data={data} columns={Columns} />}
		</main>
	)
}

export default HistoryBookings

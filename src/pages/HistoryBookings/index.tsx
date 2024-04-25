import DataTable from './components/DataTable'
import Columns from './components/Columns'
import { useQuery } from '@tanstack/react-query'
import { getBookings } from '@/services/booking'

const HistoryBookings = () => {
	const { data } = useQuery({
		queryKey: ['bookings'],
		queryFn: getBookings,
		staleTime: 3000,
	})

	return <main>{data && <DataTable data={data} columns={Columns} />}</main>
}

export default HistoryBookings

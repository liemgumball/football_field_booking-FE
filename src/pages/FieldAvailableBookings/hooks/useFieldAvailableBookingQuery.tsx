import { getDayOfServices } from '@/services/day-of-services'
import { TDayOfService, TFootballField, TTimeStep } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'

const useFieldAvailableBookingQuery = (
	date: string,
	from: TTimeStep,
	to: TTimeStep,
) => {
	const field = useOutletContext<TFootballField>()

	return useQuery<TDayOfService[]>({
		queryKey: ['day-of-services', field._id, date, from, to],
		queryFn: () => getDayOfServices(0, date, from, { to, fieldId: field._id }),
	})
}

export default useFieldAvailableBookingQuery

import { TAvailableBooking, TTimeStep } from '@/types'
import { getAvailableBookingInfo } from '@/utils/booking'
import { create } from 'zustand'

type AvailableBookingState = {
	availableBooking?: TAvailableBooking
	set: (availableBooking: TAvailableBooking) => void
	updateTimeRange: (from?: TTimeStep, to?: TTimeStep) => void
}

const useAvailableBookingStore = create<AvailableBookingState>((set) => ({
	availableBooking: undefined,

	// set availableBooking from fetch data
	set: (availableBooking) => set({ availableBooking }),

	// onChange update time range
	updateTimeRange: (from, to) =>
		set((store) => {
			if (!store.availableBooking) return store

			const { status, price, duration } = getAvailableBookingInfo(
				store.availableBooking.dayOfService,
				from || store.availableBooking.from,
				to || store.availableBooking.to,
			)

			return {
				availableBooking: {
					...store.availableBooking,
					from: from || store.availableBooking.from,
					to: to || store.availableBooking.to,
					status,
					price,
					duration,
				},
			}
		}),
}))

export default useAvailableBookingStore

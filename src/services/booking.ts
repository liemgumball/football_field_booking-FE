import { TBooking } from '@/types'
import apiRequest from './common'

export const createBooking = (
	data: Omit<TBooking, '_id' | 'subfield' | 'field' | 'status' | 'fieldId'>,
) =>
	apiRequest('bookings', {
		data,
		method: 'POST',
		withCredentials: true,
	})

export const getBookingDetails = (id: string) =>
	apiRequest(`bookings/${id}`, {
		withCredentials: true,
	})

export const getBookings = () =>
	apiRequest('bookings', {
		withCredentials: true,
	})

export const createCheckoutSession = (bookingId: string) =>
	apiRequest(`bookings/${bookingId}/create-checkout`, {
		method: 'POST',
		withCredentials: true,
	})

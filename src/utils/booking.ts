import { TTurnOfService } from '@/types'

export function getInitialFrom() {
	// 15 minutes later
	const now = new Date()
	now.setTime(now.getTime() + 15 * 60 * 1000)

	// Get next available timestep from 15 minutes later
	const hours = now.getMinutes() < 30 ? now.getHours() : now.getHours() + 1
	const minutes = now.getMinutes() < 30 ? '30' : '00'
	return hours.toString().padStart(2, '0') + ':' + minutes
}

export function getInitialTo(from?: string) {
	if (from) {
		// return after `from` 1 hour
		return (
			(Number(from.slice(0, 2)) + 1).toString().padStart(2, '0') +
			from.slice(2, 5)
		)
	}
	// 15 minutes later
	const now = new Date()
	now.setTime(now.getTime() + 15 * 60 * 1000)

	// Get next available timestep from 15 minutes later
	const minutes = now.getMinutes() < 30 ? '30' : '00'
	const hours = now.getMinutes() < 30 ? now.getHours() : now.getHours() + 1
	return (hours + 1).toString().padStart(2, '0') + ':' + minutes
}

export function calculatePrice(input: TTurnOfService[] | null): number {
	let price: number = 0

	if (!input) return 0

	input.forEach((i) => {
		price += i.price / 2
	})

	return price
}

export const formatPrice = (num: number) => {
	return num + ',000' + ' VND'
}

import { TTurnOfService } from '@/types'

export function getInitialFrom() {
	const now = new Date()
	const hours = now.getMinutes() < 30 ? now.getHours() : now.getHours() + 1
	const minutes = now.getMinutes() < 30 ? '30' : '00'
	return hours.toString().padStart(2, '0') + ':' + minutes
}

export function getInitialTo(from?: string) {
	if (from) {
		return (
			(Number(from.slice(0, 2)) + 1).toString().padStart(2, '0') +
			from.slice(2, 5)
		)
	}

	const now = new Date()
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

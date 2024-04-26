import { TTurnOfService } from '@/types'

export function getInitialFrom() {
	const now = new Date()
	const minutes = now.getMinutes() < 30 ? '00' : '30'
	return now.getHours().toString().padStart(2, '0') + ':' + minutes
}

export function getInitialTo(from?: string) {
	if (from) {
		return (
			(Number(from.slice(0, 2)) + 1).toString().padStart(2, '0') +
			from.slice(2, 5)
		)
	}

	const now = new Date()
	const minutes = now.getMinutes() < 30 ? '00' : '30'
	return (now.getHours() + 1).toString().padStart(2, '0') + ':' + minutes
}

export function calculatePrice(input: TTurnOfService[] | null): number {
	let price: number = 0

	if (!input) return 0

	input.forEach((i) => {
		price += i.price / 2
	})

	return price
}

import { TTurnOfService } from '@/types'

export function getDuration(start: string, end: string) {
	const [startHour, startMinute] = parseTimeFormat(start)
	const [endHour, endMinute] = parseTimeFormat(end)

	return endHour - startHour + (endMinute - startMinute) / 60
}

export function parseTimeFormat(input: string) {
	return input.split(':').map((i) => parseInt(i))
}

export function convertTimeFormat(hours: number, minutes: number) {
	return (
		hours.toString().padStart(2, '0') +
		':' +
		minutes.toString().padStart(2, '0')
	)
}

export function getNextTimeStep(time: string) {
	const [hours, minutes] = parseTimeFormat(time)

	if (minutes === 0) return convertTimeFormat(hours, 30)

	return convertTimeFormat(hours + 1, 0)
}

export function getTimeRange(turnOfServices: TTurnOfService[]) {
	if (turnOfServices.length === 0) return ['None', 'None']

	const from = turnOfServices[0].at
	const to = getNextTimeStep(turnOfServices[turnOfServices.length - 1].at)

	return [from, to]
}

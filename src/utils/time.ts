import { TDayOfService, TTimeStep, TTurnOfService } from '@/types'

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

/**
 * Used for time select input
 * @param dayOfService
 */
export function getTimeValues(dayOfService: TDayOfService): TTimeStep[] {
	return dayOfService.turnOfServices.map((i) => i.at as TTimeStep)
}

/**
 * Get disabled time values of Time select input
 * @param dayOfService
 */
export function getDisableTimeList(
	dayOfService: TDayOfService,
): Partial<TTimeStep[]> {
	const date = new Date(dayOfService.date)
	const now = new Date()

	const disableTimeList: Partial<TTimeStep[]> = []

	if (
		date.getUTCDate() === now.getDate() &&
		date.getUTCMonth() === now.getMonth() &&
		date.getUTCFullYear() === now.getFullYear()
	) {
		dayOfService.turnOfServices.forEach((item) => {
			if (item.at <= convertTimeFormat(now.getHours(), now.getMinutes()))
				disableTimeList.push(item.at)
		})
	}

	return disableTimeList
}

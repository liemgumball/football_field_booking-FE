export function getTimeRange(start: string, end: string) {
	const [startHour, startMinute] = parseTimeFormat(start)
	const [endHour, endMinute] = parseTimeFormat(end)

	return endHour - startHour + (endMinute - startMinute) / 60
}

export function parseTimeFormat(input: string) {
	return input.split(':').map((i) => parseInt(i))
}

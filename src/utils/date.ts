export function getNextMonth(from: Date = new Date()) {
	const nextMonth = new Date(from)

	nextMonth.setMonth(nextMonth.getMonth() + 1)

	return nextMonth
}

export function getYesterday(from: Date = new Date()) {
	const yesterday = new Date(from)

	yesterday.setDate(yesterday.getDate() - 1)

	return yesterday
}

export function getToday() {
	const today = new Date()
	today.setUTCHours(0, 0, 0, 0)
	return today
}

export function formatDate(date: Date): string {
	date.setUTCHours(0, 0, 0, 0)
	return date.toISOString()
}

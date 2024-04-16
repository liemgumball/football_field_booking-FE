export function getInitialFrom() {
	const now = new Date()
	const minutes = now.getMinutes() < 30 ? '00' : '30'
	return now.getHours().toString().padStart(2, '0') + minutes
}

export function getInitialTo() {
	const now = new Date()
	const minutes = now.getMinutes() < 30 ? '00' : '30'
	return (now.getHours() + 1).toString().padStart(2, '0') + minutes
}

export function convertToTimeFormat(input: string) {
	return input.slice(0, 2) + ':' + input.slice(2)
}

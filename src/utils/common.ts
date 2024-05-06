export function pickRandomFormArray(array: unknown[]) {
	const randomIndex = Math.floor(Math.random() * array.length)

	return array[randomIndex]
}

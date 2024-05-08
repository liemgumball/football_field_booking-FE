export function pickRandomFormArray<T>(array: T[]) {
	const randomIndex = Math.floor(Math.random() * array.length)

	return array[randomIndex]
}

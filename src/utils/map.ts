export function calculateDistance(
	latitude: number,
	zoom: number,
	radius: number,
) {
	// Calculate a distance using the zoom level
	const distance =
		(37500 * radius * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoom)

	return distance
}

import { Icons } from './Icons'

const Rating = ({ rating, size }: { rating: number | 0; size?: number }) => {
	return Array(5)
		.fill(null)
		.map((_, index) =>
			index + 1 <= rating ? (
				<Icons.Rating size={size} active key={index} />
			) : (
				<Icons.Rating size={size} key={index} />
			),
		)
}

export default Rating

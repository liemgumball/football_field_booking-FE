import { Icons } from './Icons'

const Rating = ({ rating, size }: { rating: number | 0; size?: number }) => {
	return Array(Math.floor(5))
		.fill(null)
		.map((_, index) =>
			index + 1 <= rating ? (
				<Icons.Rating size={size} color="orange" key={index} />
			) : (
				<div className="text-muted-foreground">
					<Icons.Rating size={size} key={index} />
				</div>
			),
		)
}

export default Rating

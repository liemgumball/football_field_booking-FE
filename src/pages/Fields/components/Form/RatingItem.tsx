import { StarIcon } from 'lucide-react'

const RatingItem = ({
	variant,
	isChecked,
	onClick,
}: {
	variant: number
	isChecked: boolean
	onClick: () => void
}) => {
	return (
		<div className="flex  flex-row items-center gap-2 lg:gap-4">
			<input type="radio" checked={isChecked} onClick={onClick} />
			<label className="flex gap-1 text-base uppercase lg:gap-2 lg:text-lg">
				{variant}
				<span className="flex">
					{Array(Math.floor(variant))
						.fill(null)
						.map((_, index) => (
							<StarIcon key={index} color="orange" />
						))}
				</span>
			</label>
		</div>
	)
}

export default RatingItem

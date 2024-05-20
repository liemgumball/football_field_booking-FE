import { StarIcon } from 'lucide-react'

const RatingItem = ({
	variant,
	isChecked,
	onClick,
}: {
	variant: string
	isChecked: boolean
	onClick: () => void
}) => {
	return (
		<div className="flex  flex-row items-center gap-2 lg:gap-4">
			<input type="radio" id={variant} checked={isChecked} onClick={onClick} />
			<label
				htmlFor={variant}
				className="flex gap-1 text-base uppercase lg:gap-2 lg:text-lg"
			>
				<span className="flex">
					{Array(Math.floor(5))
						.fill(null)
						.map((_, index) =>
							index + 1 <= parseInt(variant) ? (
								<StarIcon color="orange" key={index} />
							) : (
								<div className="text-muted-foreground">
									<StarIcon key={index} />
								</div>
							),
						)}
				</span>
			</label>
		</div>
	)
}

export default RatingItem
